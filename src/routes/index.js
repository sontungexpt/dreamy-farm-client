// Pages
import Home from '~/pages/Home';
import AboutUs from '~/pages/AboutUs';
import Products from '~/pages/Products';
import Recipes from '~/pages/Recipes';
import Favorite from '~/pages/Favorite';
import ShoppingCart from '~/pages/ShoppingCart';
import { Login, Register, ForgotPassword } from '~/pages/Accounts';

// Layouts
import { AccountLayout, HeaderFooterSidebar } from '~/components/Layout';

const publicRoutes = [
  // Header
  { path: '/', element: Home },
  { path: '/products', element: Products, layout: HeaderFooterSidebar },
  { path: '/recipes', element: Recipes },
  { path: '/aboutUs', element: AboutUs },
  { path: '/favorite', element: Favorite },
  { path: '/shoppingCart', element: ShoppingCart },

  // Accounts
  { path: '/accounts/', element: Login, layout: AccountLayout },
  { path: '/accounts/register', element: Register, layout: AccountLayout },
  {
    path: '/accounts/forgotPassword',
    element: ForgotPassword,
    layout: AccountLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
