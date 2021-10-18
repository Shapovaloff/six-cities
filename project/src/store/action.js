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

export const changeActiveCity = (city) => ({
  type: ActionType.CHANGE_ACTIVE_CITY,
  payload: city,
});

export const changeActiveSort = (sort) => ({
  type: ActionType.CHANGE_ACTIVE_SORT,
  payload: sort,
});

export const changeActiveCard = (id) => ({
  type: ActionType.CHANGE_ACTIVE_CARD,
  payload: id,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const loadOffersNearby = (offers) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: offers,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const loadFavorites = (favorites) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favorites,
});

export const setFavoritesItem = (favoritesItem) => ({
  type: ActionType.SET_FAVORITES_ITEM,
  payload: favoritesItem,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const loadUserInfo = (info) => ({
  type: ActionType.LOAD_USER_INFO,
  payload: info,
});

export const redirectToRoute = (route) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: route,
});

