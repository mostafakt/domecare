import { RootState } from './store';

export const getIsLoading = (state: RootState) => state.app?.isLoading;
// export const getIsAuthenticated = (state: RootState) =>
//   state.user?.isAuthenticated;
export const getUser = (state: RootState) => state.user?.user;
