// node_modules
import React, { lazy, Suspense } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
// components
const AppRouter = lazy(() => import('@pages/AppRouter'));
const LoginRouter = lazy(() => import('@pages/LoginRouter'));

const App: React.FC<{}> = () => (
  <>
    <Helmet>
      <title>App</title>
    </Helmet>
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

export default App;
