import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import offerProp from '../app/offer.prop';
import LocationsList from '../locations-list/locations-list';
import {Locations} from '../../const';
import {connect} from 'react-redux';
import MainCities from '../main-cities/main-cities';
import MainCitiesEmpty from '../main-cities-empty/main-cities-empty';

function MainPage(props) {
  const {offers, city} = props;
  const locations = Object.values(Locations);
  const filterOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${filterOffers.length && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={locations} />
          </section>
        </div>
        <div className="cities">
          {filterOffers.length ? <MainCities offers={filterOffers} city={city} /> : <MainCitiesEmpty />}
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
