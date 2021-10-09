import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../card-item/card-item';
import Header from '../header/header';
import offerProp from '../app/offer.prop';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import {Locations} from '../../const';
import SortForm from '../sort-form/sort-form';
import {connect} from 'react-redux';

function MainPage(props) {
  const {offers, city} = props;
  const locations = Object.values(Locations);
  const filterOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={locations} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                {filterOffers.map((offer) => (
                  <CardItem key={offer.id} offer={offer} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={filterOffers[0].city} offers={filterOffers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
});

export default connect(mapStateToProps, null)(MainPage);
