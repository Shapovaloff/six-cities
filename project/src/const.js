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

export const DateConfig = {
  LOCALES: 'en-US',
  YEAR: 'numeric',
  MONTH: 'short',
};

export const MapConfig = {
  TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const MAX_RATING = 5;
export const MAX_PERCENT = 100;
