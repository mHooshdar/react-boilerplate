// node_modules
import React, { lazy, Suspense } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// components
const AppRouter = lazy(() => import('@pages/AppRouter'));
const LoginRouter = lazy(() => import('@pages/LoginRouter'));

const App: React.FC<{}> = () => {
  return (
    <>
      <Router>
        <Suspense fallback="">
          <Switch>
            <Route path="/app" component={AppRouter} />
            <Route path="/login" component={LoginRouter} />

            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
