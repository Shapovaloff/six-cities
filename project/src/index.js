import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createAPI} from './services/api';
import {reducer} from './store/reducer';
import rootReducer from './store/root-reducer';
import {Provider} from 'react-redux';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchFavorites, fetchOfferList} from './store/api-actions';
import {configureStore} from '@reduxjs/toolkit';
import {redirect} from './middlewares/redirect';

const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOfferList());
store.dispatch(fetchFavorites());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
