import React from 'react';
import PropTypes from 'prop-types';

function SortItem(props) {
  const {sort, activeSort, changeSort, setIsActive} = props;

  return (
    <li
      className={`places__option ${activeSort && 'places__option--active'}`} tabIndex="0"
      onClick={() => {
        changeSort(sort);
        setIsActive(false);
      }}
    >
      {sort}
    </li>
  );
}

SortItem.propTypes = {
  sort: PropTypes.string.isRequired,
  activeSort: PropTypes.bool.isRequired,
  changeSort: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default SortItem;
