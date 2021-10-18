import React from 'react';
import PropTypes from 'prop-types';
import {changeActiveCity} from '../../store/action';
import {connect} from 'react-redux';
import {getCity} from '../../store/ui/selectors';

function LocationsList(props) {
  const {locations, city, changeCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {locations.map((location) => (
        <li
          key={location}
          className="locations__item"
          onClick={() => {
            changeCity(location);
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
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(changeActiveCity(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
