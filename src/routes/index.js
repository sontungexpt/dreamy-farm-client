import Home from '~/pages/Home';
import { Login, Register, ForgotPassword } from '~/pages/Accounts';

// public routes

const publicRoutes = [
  { path: '/', element: Home },
  { path: '/login', element: Login, layout: null },
  { path: '/register', element: Register, layout: null },
  { path: '/forgotPassword', element: ForgotPassword, layout: null },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
