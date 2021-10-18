import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoritesPage from '../favorites-page/favorites-page';
import SignInPage from '../sign-in-page/sign-in-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPage} />
        <PrivateRoute
          exact
          path={AppRoute.SIGN_IN}
          status={AuthorizationStatus.NO_AUTH}
          redirect={AppRoute.MAIN}
          render={() => <SignInPage />}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        />
        <Route exact path={AppRoute.ROOM} component={RoomPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
