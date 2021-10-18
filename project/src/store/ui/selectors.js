import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.UI].city;
export const getActiveSort = (state) => state[NameSpace.UI].activeSort;
export const getActiveCard = (state) => state[NameSpace.UI].activeCard;
export const getUser = (state) => state[NameSpace.UI].user;
