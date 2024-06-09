import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ILoginResponse } from '../types/login';
import { ACCESS_TOKEN } from '../utils/constants';

export interface UserState {
  isAuthenticated?: boolean;
  accessToken?: string | null;
  user?: ILoginResponse | null;
}

const initialState: UserState = {
  isAuthenticated: !false,
  accessToken: localStorage.getItem(ACCESS_TOKEN) ?? '',
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    setUser: (state, action: PayloadAction<ILoginResponse>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.accessToken = action.payload.token;
      localStorage.setItem(ACCESS_TOKEN, action.payload.token ?? '');
    },
  },
});

export const { setTokens, setUser } = userSlice.actions;

export default userSlice.reducer;
