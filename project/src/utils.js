import {DateConfig, MAX_PERCENT, MAX_RATING} from './const';

export const getRating = (rating) => `${(rating / MAX_RATING) * MAX_PERCENT}%`;

export const getDateToString = (date) => new Date(date).toLocaleDateString(DateConfig.LOCALES, {
  year: DateConfig.YEAR,
  month: DateConfig.MONTH,
});
