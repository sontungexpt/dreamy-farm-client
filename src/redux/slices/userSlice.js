import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getToken,
  getUserInfos,
  registerUser,
  updateUserFavoriteProducts,
  getUserFavoriteProducts,
  updateUserProfile,
} from '~/apiServices/userServices';

import { routes as routesConfig } from '~/configs';
import history from '~/utils/navigateSite';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'idle',
    loggedIn: false,
    email: '',
    name: '',
    avatar: '',
    addreses: [],
    sex: '',
    // addreses{
    //  address: '',
    //  phoneNumber: '',
    //  active: false,
    // }
    addressActive: 0,
    roles: [],
    favoriteProducts: [],
    wishList: [], //array of objects
  },
  reducers: {
    logout: (state) => {
      state.status = 'idle';
      state.loggedIn = false;
      state.name = '';
      state.email = '';
      state.avatar = '';
      state.addreses = [];
      state.sex = '';
      state.addressActive = 0;
      state.roles = [];
      state.favoriteProducts = [];
      state.wishList = [];

      window.localStorage.removeItem('DreamyFarmToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(login.fulfilled, (state, action) => {
        // wrong email or password
        if (!action.payload) {
          state.status = 'idle';
          return;
        }

        // login success
        Object.assign(state, action.payload);
        state.loggedIn = true;
        state.status = 'idle';
        history.navigate(routesConfig.root, { replace: true });
      })
      .addCase(login.rejected, (state) => {
        state.status = 'idle';
      })
      .addCase(register.fulfilled, (_, action) => {
        if (action.payload === 'success') {
          history.navigate(routesConfig.login, { replace: true });
        }
      })
      .addCase(updateFavoriteProducts.fulfilled, (state, action) => {
        state.favoriteProducts = action.payload;
      })
      .addCase(getWishList.fulfilled, (state, action) => {
        state.wishList = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      });
  },
});

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    const token = await getToken({ email, password });
    if (token) {
      // set token to local storage
      window.localStorage.setItem('DreamyFarmToken', token);
      window.localStorage.setItem('DreamyFarmLogin', true);

      // get user infos
      const userInfos = await getUserInfos(token);
      return userInfos;
    }
  },
);

export const updateFavoriteProducts = createAsyncThunk(
  'user/updateFavoriteProducts',
  async ({ email, productId, method }) => {
    const favoriteProducts = await updateUserFavoriteProducts(
      email,
      productId,
      method,
    );

    return favoriteProducts || [];
  },
);

export const getWishList = createAsyncThunk(
  'user/getWishlist',
  async (email) => {
    const wishList = await getUserFavoriteProducts(email);

    return wishList || [];
  },
);

export const register = createAsyncThunk(
  'user/register',
  async ({ name, email, password }) => {
    const status = await registerUser({ name, email, password });
    return status;
  },
);

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ email, name, sex }) => {
    const newUserInfo = await updateUserProfile({ email, name, sex });
    return newUserInfo;
  },
);

export const { logout } = userSlice.actions;
export default userSlice.reducer;
