// Pages
import Home from '~/pages/Home';
import AboutUs from '~/pages/AboutUs';
import Products from '~/pages/Products';
import Recipes from '~/pages/Recipes';
import Favorite from '~/pages/Favorite';
import ShoppingCart from '~/pages/ShoppingCart';
import { Login, Register, ForgotPassword } from '~/pages/Accounts';
import routesConfig from '~/configs/routes';

// Layouts
import { AccountLayout, HeaderFooterSidebar } from '~/components/Layout';

const publicRoutes = [
  // Header
  { path: routesConfig.root, element: Home },
  {
    path: routesConfig.products,
    element: Products,
    layout: HeaderFooterSidebar,
  },
  { path: routesConfig.recipes, element: Recipes },
  { path: routesConfig.aboutUs, element: AboutUs },
  { path: routesConfig.favorite, element: Favorite },
  { path: routesConfig.shoppingCart, element: ShoppingCart },

  // Accounts
  {
    path: routesConfig.login,
    element: Login,
    layout: AccountLayout,
  },
  { path: routesConfig.register, element: Register, layout: AccountLayout },
  {
    path: routesConfig.forgotPassword,
    element: ForgotPassword,
    layout: AccountLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
