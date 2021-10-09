import React from 'react';
import PropTypes from 'prop-types';

function LocationsList(props) {
  const {locations} = props;

  return (
    <ul className="locations__list tabs__list">
      {locations.map((location, id) => (
        <li key={location} className="locations__item">
          <a className={`locations__item-link ${id === 3 && 'tabs__item--active'} tabs__item`} href="#">
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
