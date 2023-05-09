import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import ProtectedRoute from '~/components/ProtectedRoute';

function App() {
  function handleAllowedRoutes() {}
  function handleRoute(route, index, notProtected) {
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
            <ProtectedRoute isAllowed={notProtected || handleAllowedRoutes()}>
              <Page />
            </ProtectedRoute>
          </Layout>
        }
      />
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => handleRoute(route, index, true))}
          {privateRoutes.map((route, index) => handleRoute(route, index))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
