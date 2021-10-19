import {Locations, SORTS} from '../../const';
import {changeActiveCard, changeActiveCity, changeActiveSort, loadUserInfo} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  city: Locations.PARIS,
  activeSort: SORTS[0],
  activeCard: null,
  user: {},
};

const ui = createReducer(initialState, (builder => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeActiveSort, (state, action) => {
      state.activeSort = action.payload;
    })
    .addCase(changeActiveCard, (state, action) => {
      state.activeCard = action.payload;
    })
    .addCase(loadUserInfo, (state, action) => {
      state.user = action.payload;
    });
}));


export {ui};
