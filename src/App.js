//librabry
import { lazy, Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// routes
import { publicRoutes, privateRoutes } from '~/routes';

//components
import Loader from '~/components/Loader';
import ProtectedRoute from '~/components/Routes/ProtectedRoute';
import ErroredRoute from '~/components/Routes/ErroredRoute';
import { ToastContainer } from 'react-toastify';

//layouts
const DefaultLayout = lazy(() =>
  import('~/layouts').then((module) => ({
    default: module.DefaultLayout,
  })),
);

function App() {
  function handleRoutes(routes, isProtected = false) {
    return routes.map((route, index) => {
      let Layout = DefaultLayout;
      if (route.layout) {
        Layout = route.layout;
      } else if (route.layout === null) {
        Layout = Fragment;
      }

      const Page = route.element;

      return (
        <Route
          key={index}
          path={route.path}
          element={
            <ErroredRoute>
              <ProtectedRoute
                isAllowed={!isProtected}
                redirectPath={route.redirectPath}
              >
                <Layout>
                  <Page />
                </Layout>
              </ProtectedRoute>
            </ErroredRoute>
          }
        />
      );
    });
  }

  return (
    <Router>
      <div className="App">
        <Suspense
          fallback={
            <Loader
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          }
        >
          <Routes>
            {handleRoutes(publicRoutes)}
            {handleRoutes(privateRoutes)}
          </Routes>
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </Router>
  );
}

export default App;
