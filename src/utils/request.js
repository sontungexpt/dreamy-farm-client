import axios from 'axios';
import i18next from 'i18next';
import { toast } from 'react-toastify';
import history from './navigateSite';
import { routes as routesConfig } from '~/configs';

const t = i18next.t.bind(i18next);
// const request = axios.create({
//   baseURL: 'https://localhost:3001',
// });

const notifyMessage = async (callback) => {
  try {
    const res = await callback();
    const { status, message } = res.data;
    if (status) {
      // NOTE: no need to notify message
      const notShowMessages = [
        'Get recipes successfully',
        'Product found',
        'Recipe found',
      ];

      if (message) {
        if (notShowMessages.includes(message)) {
          return res.data;
        }

        toast[status](t(message));
      }
    }
    return res.data;
  } catch (error) {
    // if (error?.response?.status === 404) {
    //   history.navigate(routesConfig.e404, { replace: true });
    //   return null;
    // }
    toast.error(t('Something went wrong'));
    console.log(error);
  }
};

export const get = async (url, params) => {
  const res = await notifyMessage(async () => await axios.get(url, { params }));
  return res;
};

export const post = async (url, data) => {
  const res = await notifyMessage(async () => await axios.post(url, data));
  return res;
};

export const put = async (url, data) => {
  const res = await notifyMessage(async () => await axios.put(url, data));
  return res;
};
