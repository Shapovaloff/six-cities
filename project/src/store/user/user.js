import {AuthorizationStatus} from '../../const';
import {logout, requireAuthorization} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});


export {user};
