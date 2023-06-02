import * as request from '~/utils/request';
import i18next from 'i18next';
import { toast } from 'react-toastify';
import { apis } from '~/configs';

const t = i18next.t.bind(i18next);

export const getToken = async ({ email, password }) => {
  try {
    const res = await request.post(apis.users.login, { email, password });

    const { status, message, data } = res;
    if (status) toast[status](t(message));
    return data;
  } catch (error) {
    toast.error(t('Something went wrong'));
    console.log(error);
  }
};

export const getUserInfos = async (token) => {
  try {
    const res = await request.post(apis.users.userInfos, { token });
    const { status, message, data } = res;
    if (status) toast[status](t(message));
    return data;
  } catch (error) {
    toast.error(t('Something went wrong'));
    console.log(error);
  }
};

export const updateUserFavoriteProducts = async (email, productId, method) => {
  try {
    const res = await request.post(apis.users.updateUserFavoriteProducts, {
      email,
      productId,
      method,
    });
    const { status, message, data } = res;

    if (status === 'error') {
      if (message === 'Email is required') {
        toast.warning(
          t('You need to login to add to update favorite products'),
        );
      } else {
        toast[status](t(message));
      }
    }
    return data;
  } catch (error) {
    toast.error(t('Something went wrong'));
    console.log(error);
  }
};