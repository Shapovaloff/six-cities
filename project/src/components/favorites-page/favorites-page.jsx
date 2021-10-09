import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function FavoritesPage(props) {
  const {offers} = props;
  const filterOffers = offers.filter((offer) => offer.isFavorite);
  const uniqueCities = new Set();
  filterOffers.forEach((offer) => uniqueCities.add(offer.city.name));
  const favoritesCities = [...uniqueCities.values()];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList
              favoritesCities={favoritesCities}
              filterOffers={filterOffers}
            />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
})

export default connect(mapStateToProps, null)(FavoritesPage);
