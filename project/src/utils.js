import {AuthorizationStatus, DateConfig, MAX_PERCENT, MAX_RATING, SortOptions} from './const';

export const getRating = (rating) => `${(rating / MAX_RATING) * MAX_PERCENT}%`;

export const getDateToString = (date) => new Date(date).toLocaleDateString(DateConfig.LOCALES, {
  year: DateConfig.YEAR,
  month: DateConfig.MONTH,
});

export const getSortOffers = (sort, offers) => {
  switch (sort) {
    case SortOptions.PRICE_LOW_FIRST:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortOptions.PRICE_HIGH_FIRST:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortOptions.TOP_RATED_FIRST:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const convertSnakeToCamelCase = (data) => JSON.parse(JSON.stringify(data).replace(
  /(_\w)\w+":/g, (match) => match[1].toUpperCase() + match.substring(2),
));
