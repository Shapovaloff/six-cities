import {ActionType} from '../action';

const initialState = {
  offer: {},
  offers: [],
  offersNearby: [],
  reviews: [],
  favorites: [],
  isDataLoadedOffer: false,
  isDataLoadedOffers: false,
  isDataLoadedOffersNearby: false,
  isDataLoadedReviews: false,
  isDataLoadedFavorites: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isDataLoadedOffer: true,
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
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isDataLoadedReviews: true,
      };
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        isDataLoadedFavorites: true,
      };
    case ActionType.SET_FAVORITES_ITEM:
      return {
        offers: state.offers.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer),
        offersNearby: state.offersNearby.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer),
        favorites: state.favorites.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer),
        offer: state.offer.id === action.payload.id ? action.payload : state.offer,
      };
    default:
      return state;
  }
};

export {data};

