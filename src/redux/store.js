// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import counterReducer from './slices/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});
