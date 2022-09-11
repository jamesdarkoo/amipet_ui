import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => {
  return configureStore({
    reducer: {},
  });
}

export const wrapper = createWrapper(makeStore, { debug: true });
