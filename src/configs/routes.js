const routes = {
  // headers pages
  root: '/',
  products: '/products',
  productDetail: '/products/detail/:id',
  moveProductDetail: (id) => `/products/detail/${id}`,
  recipes: '/recipes',
  aboutUs: '/aboutUs',
  shoppingCart: '/shoppingCart',
  checkout: '/checkout',
  orderConfirm: '/orderConfirm',

  // accounts pages
  login: '/accounts/',
  register: '/accounts/register',
  forgotPassword: '/accounts/forgotPassword',

  // error pages
  e404: '*',

  // settings
  userInfos: {
    root: '/user-infos/accounts',
    orders: '/user-infos/orders',
    address: '/user-infos/address',
    wishlist: '/user-infos/wishlist', //header too
  },
};

export default routes;
