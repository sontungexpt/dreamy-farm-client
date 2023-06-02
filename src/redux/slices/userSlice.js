import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    name: '',
    avatar: '',
    addreses: [],
    addressActive: 0,
    phoneNumber: '',
    roles: [],
    favoriteProducts: [],
  },
  reducers: {
    login: (state, action) => {
      const {
        email,
        fullName,
        avatar,
        addreses,
        addressActive,
        roles,
        phoneNumber,
      } = action.payload;

      state.email = email;
      state.name = fullName;
      state.avatar = avatar;
      state.addreses = addreses;
      state.addressActive = addressActive;
      state.phoneNumber = phoneNumber;
      state.roles = roles;
    },

    logout: (state) => {
      state.name = '';
      state.email = '';
      state.addreses = [];
      state.addressActive = 0;
      state.phoneNumber = '';
      state.roles = [];
      state.favoriteProducts = [];
    },

    updateFavoriteProducts: (state, action) => {
      state.favoriteProducts = action.payload;
    },
  },
});

export const { login, logout, updateFavoriteProducts } = userSlice.actions;
export default userSlice.reducer;
