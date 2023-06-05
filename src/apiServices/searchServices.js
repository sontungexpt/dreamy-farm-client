import * as request from '~/utils/request';
import { apis } from '~/configs';

export const search = async (name) => {
  const res = await request.get(apis.products.search, { name });
  return res.data;
};
