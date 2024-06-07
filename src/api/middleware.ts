import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import ApiErrorType from '../types/ApiError';
import eventManager, {
  EVENT_ERROR,
  EVENT_FORBIDDEN,
  EVENT_UNAUTHORIZED,
} from '../events';
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_API_URL || '',
  prepareHeaders: async (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  any,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const urlEnd = typeof args === 'string' ? args : args.url;
  const adjustedUrl = urlEnd;
  const adjustedArgs =
    typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl };

  await mutex.waitForUnlock();
  const result = (await baseQuery(adjustedArgs, api, extraOptions)) as any;

  if (result?.error) {
    {
      const message: string = result?.error?.data?.message;

      let type: ApiErrorType;
      switch (result?.error?.status) {
        case 400:
          type = ApiErrorType.BAD_REQUEST;
          eventManager.emit(EVENT_ERROR, message);
          break;
        case 401:
          type = ApiErrorType.UNAUTHORIZED;
          eventManager.emit(EVENT_UNAUTHORIZED, message);
          break;
        case 403:
          type = ApiErrorType.FORBIDDEN;
          eventManager.emit(EVENT_FORBIDDEN, message);
          break;
        case 404:
          type = ApiErrorType.NOT_FOUND;
          break;
        case 409:
          type = ApiErrorType.CONFLICT;
          break;
        case 500:
          type = ApiErrorType.INTERNAL_SERVER_ERROR;
          break;
        default:
          type = ApiErrorType.UNKNOWN;
          break;
      }
    }
  }
  return result;
};

export default customFetchBase;
