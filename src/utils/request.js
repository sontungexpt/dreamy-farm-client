import axios from 'axios';
import i18next from 'i18next';
import { toast } from 'react-toastify';

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
      if (message === 'Product found') {
        return res.data;
      }
      if (message === 'Get recipes successfully') {
        return res.data;
      }

      //
      if (message) {
        toast[status](t(message));
      }
    }
    return res.data;
  } catch (error) {
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
