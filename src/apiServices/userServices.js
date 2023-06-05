import * as request from '~/utils/request';
import { apis } from '~/configs';
import encryptPassword from '~/utils/encryptPassword';

export const getToken = async ({ email, password }) => {
  const encryptedPassword = encryptPassword(password);

  const res = await request.post(apis.users.login, {
    email,
    password: encryptedPassword,
  });
  const { data } = res;
  return data;
};

export const getUserInfos = async (token) => {
  const res = await request.post(apis.users.userInfos, { token });
  const { data } = res;
  return data;
};

export const registerUser = async ({ name, email, password }) => {
  const encryptedPassword = encryptPassword(password);

  const res = await request.post(apis.users.register, {
    name,
    email,
    password: encryptedPassword,
    method: 'register',
  });
  const { status } = res;

  return status;
};

export const updateUserFavoriteProducts = async (email, productId, method) => {
  const res = await request.post(apis.users.updateUserFavoriteProducts, {
    email,
    productId,
    method,
  });
  const { data } = res;
  return data;
};

export const getUserFavoriteProducts = async (email) => {
  const res = await request.post(apis.users.getUserFavoriteProducts, {
    email,
  });
  const { data } = res;
  return data;
};

export const addFeedback = async ({ email, content }) => {
  const res = await request.post(apis.users.feedback, {
    email,
    content,
  });
  const { data } = res;
  return data;
};

export const updateUserProfile = async ({ email, name, sex }) => {
  const res = await request.put(apis.users.updateProfile, {
    email,
    name,
    sex,
  });
  const { data } = res;
  return data;
};
