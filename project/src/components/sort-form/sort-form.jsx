import React, {useRef, useState} from 'react';
import SortItem from '../sort-item/sort-item';
import {SORTS} from '../../const';
import {useSelector} from 'react-redux';
import useOutsideClick from '../../hooks/use-outside-click';
import {getActiveSort} from '../../store/ui/selectors';

function SortForm() {
  const activeSort = useSelector(getActiveSort);
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
            setIsActive={setIsActive}
          />
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
