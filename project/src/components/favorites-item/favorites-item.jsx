import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import CardItem from '../card-item/card-item';
import {CardType} from '../../const';

function FavoritesItem(props) {
  const {city, offers} = props;
  const cityOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers.map((offer) => (
          <CardItem key={offer.id} offer={offer} typeCard={CardType.FAVORITES} />
        ))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesItem;
