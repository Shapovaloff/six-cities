import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_ACTIVE_CITY: 'ui/changeActiveCity',
  CHANGE_ACTIVE_SORT: 'ui/changeActiveSort',
  CHANGE_ACTIVE_CARD: 'ui/changeActiveCard',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_FAVORITES: 'data/loadFavorites',
  LOAD_USER_INFO: 'user/loadUserInfo',
  SET_FAVORITES_ITEM: 'ui/setFavoritesItem',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'ui/redirectToRoute',
};

export const changeActiveCity = createAction(ActionType.CHANGE_ACTIVE_CITY, (city) => ({
  payload: city,
}));

export const changeActiveSort = createAction(ActionType.CHANGE_ACTIVE_SORT, (sort) => ({
  payload: sort,
}));

export const changeActiveCard = createAction(ActionType.CHANGE_ACTIVE_CARD, (id) => ({
  payload: id,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers) => ({
  payload: offers,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (favorites) => ({
  payload: favorites,
}));

export const setFavoritesItem = createAction(ActionType.SET_FAVORITES_ITEM, (favoritesItem) => ({
  payload: favoritesItem,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const loadUserInfo = createAction(ActionType.LOAD_USER_INFO, (info) => ({
  payload: info,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (route) => ({
  payload: route,
}));

