import {
  loadFavorites,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  setFavoritesItem
} from '../action';
import {createReducer} from '@reduxjs/toolkit';

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

const data = createReducer(initialState, (builder => {
  builder
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isDataLoadedOffer = true;
    })
    .addCase(loadOffers, (state, action) => {
      state.isDataLoadedOffers = true;
      state.offers = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.isDataLoadedOffersNearby = true;
      state.offersNearby = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.isDataLoadedReviews = true;
      state.reviews = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.isDataLoadedFavorites = true;
      state.favorites = action.payload;
    })
    .addCase(setFavoritesItem, (state, action) => {
      state.offers = state.offers.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer);
      state.offersNearby = state.offersNearby.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer);
      state.favorites = state.favorites.map((oldOffer) => oldOffer.id === action.payload.id ? action.payload : oldOffer);
      state.offer = state.offer.id === action.payload.id ? action.payload : state.offer;
    });
}));

export {data};

