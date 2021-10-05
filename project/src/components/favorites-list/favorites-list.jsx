import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';
import offerProp from '../app/offer.prop';

function FavoritesList(props) {
  const {favoritesCities, filterOffers} = props;

  return (
    <ul className="favorites__list">
      {favoritesCities.map((city) => (
        <FavoritesItem key={city} city={city} offers={filterOffers} />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  filterOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesList;
