import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import offerProp from '../app/offer.prop';
import LocationsList from '../locations-list/locations-list';
import {Locations} from '../../const';
import {connect} from 'react-redux';
import MainCities from '../main-cities/main-cities';
import MainCitiesEmpty from '../main-cities-empty/main-cities-empty';
import {getSortOffers} from '../../utils';
import LoadingWrapper from '../loading-wrapper/loading-wrapper';
import {getIsDataLoadedOffers, getOffers} from '../../store/data/selectors';
import {getActiveSort, getCity} from '../../store/ui/selectors';

function MainPage(props) {
  const {offers, city, activeSort, isDataLoadedOffers} = props;
  const locations = Object.values(Locations);
  const filterOffers = offers.filter((offer) => offer.city.name === city);
  const sortOffers = getSortOffers(activeSort, filterOffers);

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
        <LoadingWrapper isLoad={isDataLoadedOffers}>
          <div className="cities">
            {filterOffers.length ? <MainCities offers={sortOffers} city={city} /> : <MainCitiesEmpty />}
          </div>
        </LoadingWrapper>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
  isDataLoadedOffers: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCity(state),
  activeSort: getActiveSort(state),
  isDataLoadedOffers: getIsDataLoadedOffers(state),
});

export default connect(mapStateToProps, null)(MainPage);
