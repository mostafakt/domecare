import { createApi } from '@reduxjs/toolkit/query/react';

import customFetchBase from './middleware';
import { ILoginPayload, ILoginResponse } from '../types/login';

export const authApi = createApi({
  baseQuery: customFetchBase,
  reducerPath: 'auth',
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (request) => ({
        url: `auth/login`,
        method: 'POST',
        body: request,
      }),
    }),
  }),
});
export const { useLoginMutation } = authApi;
