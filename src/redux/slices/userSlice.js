import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {},
  },
  reducers: {
    login: (state, action) => {
      for (const key in action) {
        state.users[key] = action[key];
      }
    },
    logout: (state, action) => {
      state.users = {};
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
