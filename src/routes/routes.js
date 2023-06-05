// librabries
import { lazy } from 'react';

//configs
import { routes as routesConfig } from '~/configs';

// Layouts
const CenterContentLayout = lazy(() =>
  import('~/layouts').then((module) => ({
    default: module.CenterContentLayout,
  })),
);

const UserInfoLayout = lazy(() =>
  import('~/layouts').then((module) => ({
    default: module.UserInfoLayout,
  })),
);

const HeaderOnly = lazy(() =>
  import('~/layouts').then((module) => ({
    default: module.HeaderOnly,
  })),
);

// Pages lazy load
const Home = lazy(() => import('~/pages/Home'));
const AboutUs = lazy(() => import('~/pages/AboutUs'));
const Products = lazy(() => import('~/pages/Products'));
const Recipes = lazy(() => import('~/pages/Recipes'));
const ShoppingCart = lazy(() => import('~/pages/ShoppingCart'));
const Checkout = lazy(() => import('~/pages/Checkout'));
const OrderConfirm = lazy(() => import('~/pages/OrderConfirm'));
const ProductDetail = lazy(() => import('~/pages/ProductDetail'));
const RecipeDetail = lazy(() => import('~/pages/RecipeDetail'));
// Admin pages
const AdminProductsManagement = lazy(() =>
  import('~/pages/Admin/ProductManagement'),
);
const adminProductsAdd = lazy(() => import('~/pages/Admin/ProductAdd'));
const adminProductsEdit = lazy(() => import('~/pages/Admin/ProductManagement'));
const adminUserManagement = lazy(() =>
  import('~/pages/Admin/ProductManagement'),
);
const adminUserProfile = lazy(() => import('~/pages/Admin/ProductManagement'));
const adminRecipeAdd = lazy(() => import('~/pages/Admin/ProductManagement'));
const adminRecipeEdit = lazy(() => import('~/pages/Admin/ProductManagement'));
const adminOrderDetails = lazy(() => import('~/pages/Admin/OrderDetails'));
const adminOrderManagement = lazy(() =>
  import('~/pages/Admin/ProductManagement'),
);

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
  { path: routesConfig.recipeDetail, element: RecipeDetail },
  { path: routesConfig.aboutUs, element: AboutUs },
  // admin
  {
    path: routesConfig.adminProductsManagement,
    element: AdminProductsManagement,
  },
  {
    path: routesConfig.adminProductsAdd,
    element: adminProductsAdd,
  },
  {
    path: routesConfig.adminProductsEdit,
    element: adminProductsEdit,
  },
  {
    path: routesConfig.adminRecipeAdd,
    element: adminRecipeAdd,
  },
  {
    path: routesConfig.adminRecipeEdit,
    element: adminRecipeEdit,
  },
  {
    path: routesConfig.adminOrderManagement,
    element: adminOrderManagement,
  },
  {
    path: routesConfig.adminOrderDetails,
    element: adminOrderDetails,
  },
  {
    path: routesConfig.adminUserManagement,
    element: adminUserManagement,
  },
  {
    path: routesConfig.adminUserProfile,
    element: adminUserProfile,
  },

  // Accounts
  {
    path: routesConfig.login,
    element: Login,
    layout: CenterContentLayout,
  },

  {
    path: routesConfig.register,
    element: Register,
    layout: CenterContentLayout,
  },

  {
    path: routesConfig.forgotPassword,
    element: ForgotPassword,
    layout: CenterContentLayout,
  },

  {
    path: routesConfig.e404,
    element: E404,
    layout: null,
  },
];

const privateRoutes = [
  {
    path: routesConfig.shoppingCart,
    element: ShoppingCart,
    redirectPath: routesConfig.login,
  },
  {
    path: routesConfig.checkout,
    element: Checkout,
    redirectPath: routesConfig.login,
  },
  {
    path: routesConfig.orderConfirm,
    element: OrderConfirm,
    layout: CenterContentLayout,
    redirectPath: routesConfig.login,
  },
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
