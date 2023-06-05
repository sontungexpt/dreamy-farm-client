import * as request from '~/utils/request';
import { apis } from '~/configs';

export const search = async (q, type) => {
  const res = await request.get(apis.products.search, {
    q: q,
    type: type || 'less',
  });
  console.log('res', res);
  return res.data;
};
