import * as request from '~/utils/request';
import { apis } from '~/configs';

export const getOrderInformation = async (method) => {
  const res = await request.get(apis.orders.getOrderDetails, { method });
  return res.data;
};
