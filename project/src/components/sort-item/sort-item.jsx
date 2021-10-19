import React from 'react';
import PropTypes from 'prop-types';
import {changeActiveSort} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import {getActiveSort} from '../../store/ui/selectors';

function SortItem(props) {
  const activeSort = useSelector(getActiveSort);
  const {sort, setIsActive} = props;
  const dispatch = useDispatch();

  return (
    <li
      className={`places__option ${sort === activeSort && 'places__option--active'}`} tabIndex="0"
      onClick={() => {
        dispatch(changeActiveSort(sort))
        setIsActive(false);
      }}
    >
      {sort}
    </li>
  );
}

SortItem.propTypes = {
  sort: PropTypes.string.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default SortItem;
