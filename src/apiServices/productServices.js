import * as request from '~/utils/request';
import i18next from 'i18next';
import { toast } from 'react-toastify';
import { apis } from '~/configs';

export const getProduct = async (slug) => {
  try {
    const res = await request.get(apis.products.detail(slug));
    return res.data;
  } catch (error) {
    if (error?.response?.status === 404) {
      return null;
    }
    toast.error(i18next.t('Something went wrong'));
    console.log(error);
  }
};
