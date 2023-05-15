// librabries
import { lazy } from 'react';

//configs
import { routes as routesConfig } from '~/configs';

// Layouts
const AccountLayout = lazy(() =>
  import('~/layouts').then((module) => ({
    default: module.AccountLayout,
  })),
);

const UserInfoLayout = lazy(() =>
  import('~/layouts').then((module) => ({
    default: module.UserInfoLayout,
  })),
);

// Pages lazy load
const Home = lazy(() => import('~/pages/Home'));
const AboutUs = lazy(() => import('~/pages/AboutUs'));
const Products = lazy(() => import('~/pages/Products'));
const Recipes = lazy(() => import('~/pages/Recipes'));
const ShoppingCart = lazy(() => import('~/pages/ShoppingCart'));
const ProductDetail = lazy(() => import('~/pages/ProductDetail'));

// Accounts lazy load
const Login = lazy(() =>
  import('~/pages/Accounts').then((module) => ({
    default: module.Login,
  })),
);
const Register = lazy(() =>
  import('~/pages/Accounts/').then((module) => ({
    default: module.Register,
  })),
);
const ForgotPassword = lazy(() =>
  import('~/pages/Accounts').then((module) => ({
    default: module.ForgotPassword,
  })),
);

// UserInfos lazy load
const Account = lazy(() =>
  import('~/pages/UserInfos').then((module) => ({
    default: module.Account,
  })),
);

const WishList = lazy(() =>
  import('~/pages/UserInfos').then((module) => ({
    default: module.WishList,
  })),
);

const Orders = lazy(() =>
  import('~/pages/UserInfos').then((module) => ({
    default: module.Orders,
  })),
);

const Address = lazy(() =>
  import('~/pages/UserInfos').then((module) => ({
    default: module.Address,
  })),
);

// error pages
const E404 = lazy(() =>
  import('~/pages/Errors').then((module) => ({
    default: module.E404,
  })),
);

const publicRoutes = [
  // Header
  { path: routesConfig.root, element: Home },
  { path: routesConfig.products, element: Products },
  { path: routesConfig.productDetail, element: ProductDetail },
  { path: routesConfig.recipes, element: Recipes },
  { path: routesConfig.aboutUs, element: AboutUs },
  { path: routesConfig.shoppingCart, element: ShoppingCart },

  // Accounts
  {
    path: routesConfig.login,
    element: Login,
    layout: AccountLayout,
  },

  {
    path: routesConfig.register,
    element: Register,
    layout: AccountLayout,
  },

  {
    path: routesConfig.forgotPassword,
    element: ForgotPassword,
    layout: AccountLayout,
  },

  {
    path: routesConfig.e404,
    element: E404,
    layout: null,
  },
];

const privateRoutes = [
  {
    path: routesConfig.userInfos.wishlist,
    element: WishList,
    layout: UserInfoLayout,
    redirectPath: routesConfig.login,
  },

  {
    path: routesConfig.userInfos.root,
    element: Account,
    layout: UserInfoLayout,
    redirectPath: routesConfig.login,
  },

  {
    path: routesConfig.userInfos.orders,
    element: Orders,
    layout: UserInfoLayout,
    redirectPath: routesConfig.login,
  },

  {
    path: routesConfig.userInfos.address,
    element: Address,
    layout: UserInfoLayout,
    redirectPath: routesConfig.login,
  },
];

export { publicRoutes, privateRoutes };
