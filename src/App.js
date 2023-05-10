//librabry
import { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// routes
import styles from './App.module.scss';
import { publicRoutes, privateRoutes } from '~/routes';

//layouts
import { DefaultLayout } from '~/layouts';

//components
import ProtectedRoute from '~/components/ProtectedRoute';
import Loader from '~/components/Loader';

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
            <ProtectedRoute
              isAllowed={!isProtected}
              redirectPath={route.redirectPath}
            >
              <Layout>
                <Page />
              </Layout>
            </ProtectedRoute>
          }
        />
      );
    });
  }

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader className={styles.loader} />}>
          <Routes>
            {handleRoutes(publicRoutes)}
            {handleRoutes(privateRoutes, true)}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
