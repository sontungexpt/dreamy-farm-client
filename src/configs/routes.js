const routes = {
  root: '/',
  products: '/products',
  productDetail: '/products/:id/about',
  moveProductDetail: (id) => `/products/${id}/about`,
  recipes: '/recipes',
  aboutUs: '/aboutUs',
  wishList: '/wishList',
  shoppingCart: '/shoppingCart',
  login: '/accounts/',
  register: '/accounts/register',
  forgotPassword: '/accounts/forgotPassword',
};

export default routes;
