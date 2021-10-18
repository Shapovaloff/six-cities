import {Locations, SORTS} from '../../const';
import {ActionType} from '../action';

const initialState = {
  city: Locations.PARIS,
  activeSort: SORTS[0],
  activeCard: null,
  user: {},
};

const ui = (state = initialState, action) => {
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
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export {ui};
