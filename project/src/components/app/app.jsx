import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import {AppRoute} from '../../const';
import FavoritesPage from '../favorites-page/favorites-page';
import SignInPage from '../sign-in-page/sign-in-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
import offerProp from './offer.prop';
import reviewProp from '../app/review.prop';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp),
};

export default App;
