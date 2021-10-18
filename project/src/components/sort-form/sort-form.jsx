import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import SortItem from '../sort-item/sort-item';
import {SORTS} from '../../const';
import {changeActiveSort} from '../../store/action';
import {connect} from 'react-redux';
import useOutsideClick from '../../hooks/use-outside-click';

function SortForm(props) {
  const {activeSort, changeSort} = props;
  const [isActive, setIsActive] = useState(false);
  const formRef = useRef();
  useOutsideClick(formRef, setIsActive);

  return (
    <form ref={formRef} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive && 'places__options--opened'}`}>
        {SORTS.map((sort) => (
          <SortItem
            key={sort}
            sort={sort}
            changeSort={changeSort}
            activeSort={sort === activeSort}
            setIsActive={setIsActive}
          />
        ))}
      </ul>
    </form>
  );
}

SortForm.propTypes = {
  activeSort: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
};

const mapStateToProps = ({UI}) => ({
  activeSort: UI.activeSort,
});

const mapDispatchToProps = (dispatch) => ({
  changeSort(sort) {
    dispatch(changeActiveSort(sort));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortForm);
