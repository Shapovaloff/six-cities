import React from 'react';
import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import FavoritesListEmpty from '../favorites-list-empty/favorites-list-empty';
import LoadingWrapper from '../loading-wrapper/loading-wrapper';
import {getFavorites, getIsDataLoadedFavorites} from '../../store/data/selectors';

function FavoritesPage() {
  const favorites = useSelector(getFavorites);
  const isDataLoadedFavorites = useSelector(getIsDataLoadedFavorites);

  const filterOffers = favorites.filter((offer) => offer.isFavorite);
  const uniqueCities = new Set();
  filterOffers.forEach((offer) => uniqueCities.add(offer.city.name));
  const favoritesCities = [...uniqueCities.values()];

  return (
    <LoadingWrapper isLoad={isDataLoadedFavorites}>
      <div className="page">
        <Header />

        <main className={`page__main page__main--favorites ${favorites.length && 'page__main--favorites-empty'}`}>
          <div className="page__favorites-container container">
            {favorites.length
              ? (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoritesList favoritesCities={favoritesCities} filterOffers={filterOffers} />
                </section>) : (<FavoritesListEmpty />) }
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.MAIN}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>

    </LoadingWrapper>
  );
}


export default FavoritesPage;
