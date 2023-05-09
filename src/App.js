import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import ProtectedRoute from '~/components/ProtectedRoute';

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
            <Layout>
              <ProtectedRoute isAllowed={!isProtected}>
                <Page />
              </ProtectedRoute>
            </Layout>
          }
        />
      );
    });
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {handleRoutes(publicRoutes)}
          {handleRoutes(privateRoutes, true)}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
