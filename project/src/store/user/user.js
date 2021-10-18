import {AuthorizationStatus} from '../../const';
import {ActionType} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user =  (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export {user};
