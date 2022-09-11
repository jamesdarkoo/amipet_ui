import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './auth.slice';

const makeStore = () => {
  return configureStore({
    reducer: {
      [authReducer.name]: authReducer.reducer,
    },
  });
}

export const wrapper = createWrapper(makeStore, { debug: true });
