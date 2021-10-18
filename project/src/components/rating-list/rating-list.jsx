import React from 'react';
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

export default RatingList;
