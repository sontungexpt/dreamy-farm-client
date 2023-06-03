import * as request from '~/utils/request';
import { apis } from '~/configs';
import MD5 from 'crypto-js/md5';
import sha256 from 'crypto-js/sha256';

export const getToken = async ({ email, password }) => {
  const md5password = MD5(password).toString();
  const encryptedPassword = sha256(md5password).toString();

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
  const md5password = MD5(password).toString();
  const encryptedPassword = sha256(md5password).toString();

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
