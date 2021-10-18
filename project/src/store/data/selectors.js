import {NameSpace} from '../root-reducer';

export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
export const getIsDataLoadedOffer = (state) => state[NameSpace.DATA].isDataLoadedOffer;
export const getIsDataLoadedOffers = (state) => state[NameSpace.DATA].isDataLoadedOffers;
export const getIsDataLoadedOffersNearby = (state) => state[NameSpace.DATA].isDataLoadedOffersNearby;
export const getIsDataLoadedReviews = (state) => state[NameSpace.DATA].isDataLoadedReviews;
export const getIsDataLoadedFavorites = (state) => state[NameSpace.DATA].isDataLoadedFavorites;


