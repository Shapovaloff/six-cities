import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../app/app';
import ReviewItem from '../review-item/review-item';

function ReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
};

export default ReviewsList;
