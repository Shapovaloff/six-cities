import React from 'react';
import PropTypes from 'prop-types';
import {changeActiveCity} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import {getCity} from '../../store/ui/selectors';

function LocationsList(props) {
  const {locations} = props;
  const dispatch = useDispatch();
  const city = useSelector(getCity);

  return (
    <ul className="locations__list tabs__list">
      {locations.map((location) => (
        <li
          key={location}
          className="locations__item"
          onClick={() => {
            dispatch(changeActiveCity(location))
          }}
        >
          <a className={`locations__item-link ${city === location && 'tabs__item--active'} tabs__item`} href="#">
            <span>{location}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default LocationsList;
