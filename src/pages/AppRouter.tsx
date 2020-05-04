// node_modules
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
// layouts
import MainLayout from '@layouts/MainLayout';
// hocs
import RequiredAuth from '@hocs/RequiredAuth';
// styles
import '@styles/app/index.scss';
// pages
const AppIndexPage = lazy(() => import('@pages/app'));

interface MatchParams {
  name: string;
}

type AllProps = RouteComponentProps<MatchParams>;

const AppRouter: React.FC<AllProps> = ({ match }) => (
  <MainLayout>
    <Suspense fallback="">
      <Switch>
        <Route exact path={`${match.path}/`} component={AppIndexPage} />
      </Switch>
    </Suspense>
  </MainLayout>
);
export default RequiredAuth(AppRouter);
