const routes = {
  // headers pages
  root: '/',
  products: '/products',
  productDetail: '/products/detail/:slug',
  moveProductDetail: (slug) => `/products/detail/${slug}`,
  recipes: '/recipes',
  recipeDetail: '/recipes/detail/:id',
  moveRecipeDetail: (slug) => `/recipes/detail/${slug}`,
  aboutUs: '/aboutUs',
  shoppingCart: '/shoppingCart',
  checkout: '/checkout',
  orderConfirm: '/orderConfirm',

  //admin
  adminProductsManagement: '/admin/products/management',
  adminProductsAdd: '/admin/products/add',
  adminProductsEdit: '/admin/products/edit',
  adminUserManagement: '/admin/users/management',
  adminUserProfile: '/admin/users/profile',
  adminRecipeAdd: '/admin/recipes/add',
  adminRecipeEdit: '/admin/recipes/edit',
  adminOrderManagement: '/admin/orders/management',
  adminOrderDetails: '/admin/orders/details',

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
