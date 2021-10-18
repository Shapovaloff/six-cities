export const AppRoute ={
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const CardType = {
  MAIN: 'cities',
  FAVORITES: 'favorites',
  NEARBY: 'near-places',
};

export const buttonType = {
  BIG: 'big',
  SMALL: 'small',
};

export const DateConfig = {
  LOCALES: 'en-US',
  YEAR: 'numeric',
  MONTH: 'short',
};

export const MapConfig = {
  TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const Locations = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const SORTS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const SortOptions = {
  PRICE_LOW_FIRST: 'Price: low to high',
  PRICE_HIGH_FIRST: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  OFFERS_NEARBY: '/nearby',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITES: '/favorite',
  REVIEWS: '/comments',
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const MAX_RATING = 5;
export const MAX_PERCENT = 100;
export const REMOVE_FAVORITES_COUNT = 1;
