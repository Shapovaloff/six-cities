import React from 'react';
import SortItem from '../sort-item/sort-item';
import {SORTS} from '../../const';

function SortForm() {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORTS.map((sort, id) => (
          <SortItem key={sort} sort={sort} activeSort={id === 0} />
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
