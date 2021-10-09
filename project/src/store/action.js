export const ActionType = {
  CHANGE_ACTIVE_CITY: 'ui/changeActiveCity',
  CHANGE_ACTIVE_SORT: 'ui/changeActiveSort',
  CHANGE_ACTIVE_CARD: 'ui/changeActiveCard',
};

export const ActionCreator = {
  changeActiveCity: (city) => ({
    type: ActionType.CHANGE_ACTIVE_CITY,
    payload: city,
  }),
  changeActiveSort: (sort) => ({
    type: ActionType.CHANGE_ACTIVE_SORT,
    payload: sort,
  }),
  changeActiveCard: (id) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: id,
  }),
};
