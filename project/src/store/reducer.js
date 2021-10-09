import {Locations, SORTS} from '../const';
import reviews from '../mocks/reviews';
import offers from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  city: Locations.PARIS,
  activeSort: SORTS[0],
  activeCard: null,
  offers,
  reviews,
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
    default:
      return state;
  }
};

export {reducer};
