const routes = {
  // headers pages
  root: '/',
  products: '/products',
  productDetail: '/products/:id/about',
  moveProductDetail: (id) => `/products/${id}/about`,
  recipes: '/recipes',
  aboutUs: '/aboutUs',
  shoppingCart: '/shoppingCart',

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
    wishlist: '/user-infos/wishlist',
  },
};

export default routes;
