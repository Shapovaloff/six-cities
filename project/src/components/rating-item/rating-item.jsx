import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function RatingItem(props) {
  const {rating} = props;

  return (
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </Fragment>
  );
}

RatingItem.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingItem;
