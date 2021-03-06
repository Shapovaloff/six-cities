import React from 'react';
import PropTypes from 'prop-types';
import SortForm from '../sort-form/sort-form';
import CardItem from '../card-item/card-item';
import Map from '../map/map';
import offerProp from '../app/offer.prop';

function MainCities(props) {
  const {offers, city} = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.left} places to stay in {city}</b>
        <SortForm />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <CardItem key={offer.id} offer={offer} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city={offers[0].city} offers={offers} />
        </section>
      </div>
    </div>
  );
}

MainCities.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
};

export default MainCities;
