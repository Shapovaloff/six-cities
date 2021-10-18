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

export const ActionCreator = {
  changeActiveCity: (city) => ({
    type: ActionType.CHANGE_ACTIVE_CITY,
    payload: city,
  }),
  changeActiveSort: (sort) => ({
    type: ActionType.CHANGE_ACTIVE_SORT,
    payload: sort,
  }),
  changeActiveCard: (id) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: id,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadOffersNearby: (offers) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites,
  }),
  setFavoritesItem: (favoritesItem) => ({
    type: ActionType.SET_FAVORITES_ITEM,
    payload: favoritesItem,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  loadUserInfo: (info) => ({
    type: ActionType.LOAD_USER_INFO,
    payload: info,
  }),
  redirectToRoute: (route) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: route,
  }),
};
