import {AuthorizationStatus, Locations, SORTS} from '../const';
import {ActionType} from './action';

const initialState = {
  city: Locations.PARIS,
  activeSort: SORTS[0],
  activeCard: null,
  offer: {},
  offers: [],
  offersNearby: [],
  reviews: [],
  favorites: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
  isDataLoadedOffers: false,
  isDataLoadedOffersNearby: false,
  isDataLoadedOffer: false,
  isDataLoadedReviews: false,
  isDataLoadedFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.CHANGE_ACTIVE_SORT:
      return {
        ...state,
        activeSort: action.payload,
      };
    case ActionType.CHANGE_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoadedOffers: true,
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
        isDataLoadedOffersNearby: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isDataLoadedOffer: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isDataLoadedReviews: true,
      };
    case ActionType.LOAD_FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
        isDataLoadedFavorites: true,
      };
    }
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.SET_FAVORITES_ITEM: {
      return {
        ...state,
        offers: state.offers.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer),
        offersNearby: state.offersNearby.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer),
        favorites: state.favorites.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer),
        offer: state.offer.id === action.payload.id ? action.payload : state.offer,
      };
    }
    default:
      return state;
  }
};

export {reducer};
