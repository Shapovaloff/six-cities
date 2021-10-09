import React from 'react';
import PropTypes from 'prop-types';

function SortItem(props) {
  const {sort, activeSort} = props;

  return (
    <li className={`places__option ${activeSort && 'places__option--active'}`} tabIndex="0">{sort}</li>
  );
}

SortItem.propTypes = {
  sort: PropTypes.string.isRequired,
  activeSort: PropTypes.bool.isRequired,
};

export default SortItem;
