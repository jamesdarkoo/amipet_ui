import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { cache } from '../graphql/client';

const initialState = {
  token: null,
  user: null,
  error: null,
  loggedIn: !!Cookies.get('accessToken'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateSuccess(state, action) {
      state.token = action.payload.accessToken;
      state.user = action.payload.me;
      state.error = null;
      state.loggedIn = true;
    },
    authenticateFailed(state, action) {
      state.token = null;
      state.user = null;
      state.error = action.payload;
      state.loggedIn = false;
    },
    signOut(state) {
      state.token = null;
      state.user = null;
      state.loggedIn = false;
      Cookies.remove('accessToken');
      cache.reset();
    },
    setUser(state, action) {
      state.user = action.payload;
      state.loggedIn = true;
    },
  },
});

export const { authenticateFailed, authenticateSuccess, setUser, signOut } = authSlice.actions;

export default authSlice;
