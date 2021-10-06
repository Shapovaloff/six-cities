import React from 'react';
import PropTypes from 'prop-types';

function GoodsList(props) {
  const {goods} = props;

  return (
    <ul className="property__inside-list">
      {goods.map((good) => (
        <li key={good} className="property__inside-item">{good}</li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
