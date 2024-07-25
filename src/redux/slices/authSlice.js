// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Example async thunk for logging in
export const login = createAsyncThunk('auth/login', async (credentials ) => {
  // Simulate an API call
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: credentials , token: 'fakeToken123' });
    }, 1000);
  });
  return response;
});

export const sendOtp = createAsyncThunk('auth/sendOtp', async (credentials ) => {
  // Simulate an API call
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: credentials , token: 'fakeToken123' });
    }, 1000);
  });
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
