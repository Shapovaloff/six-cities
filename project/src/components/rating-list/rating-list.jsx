import React from 'react';
// import PropTypes from 'prop-types';
import RatingItem from '../rating-item/rating-item';

const RATING = [5, 4, 3, 2, 1];

function RatingList() {
  return (
    <div className="reviews__rating-form form__rating">
      {RATING.map((rating) => (
        <RatingItem key={rating} rating={rating} />
      ))}
    </div>
  );
}
//
// RatingList.propTypes = {
//
// };

export default RatingList;
