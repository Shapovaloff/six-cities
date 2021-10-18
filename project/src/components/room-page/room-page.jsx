import React, {useEffect} from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import reviewProp from '../app/review.prop';
import {useParams} from 'react-router-dom';
import GalleryList from '../gallery-list/gallery-list';
import GoodsList from '../goods-list/goods-list';
import {getRating} from '../../utils';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import CardItem from '../card-item/card-item';
import {buttonType, CardType} from '../../const';
import Map from '../map/map';
import {connect} from 'react-redux';
import {fetchOffer, fetchOffersNearby, fetchReviews} from '../../store/api-actions';
import LoadingWrapper from '../loading-wrapper/loading-wrapper';
import NotFoundPage from '../not-found-page/not-found-page';
import FavoritesButton from '../favorites-button/favorites-button';
import {
  getIsDataLoadedOffer,
  getIsDataLoadedOffersNearby,
  getIsDataLoadedReviews,
  getOffer, getOffersNearby,
  getReviews
} from '../../store/data/selectors';

function RoomPage(props) {
  const {reviews, offer = {}, offersNearby = [], loadReviews, loadOffer, loadOffersNearby, isDataLoadedOffer, isDataLoadedReviews, isDataLoadedOffersNearby} = props;
  const params = useParams();
  const roomId = +params.id;

  useEffect(() => {
    loadOffer(roomId);
    loadOffersNearby(roomId);
    loadReviews(roomId);
  }, [roomId]);

  const {id, images, goods, isFavorite, isPremium, title, rating, type, bedrooms, maxAdults, description, host} = offer;

  return (
    <LoadingWrapper isLoad={isDataLoadedOffer}>
      {(Object.keys(offer).length)
        ? (
          <div className="page">
            <Header />

            <main className="page__main page__main--property">
              <section className="property">
                <div className="property__gallery-container container">
                  <GalleryList images={images} />
                </div>
                <div className="property__container container">
                  <div className="property__wrapper">
                    {isPremium && (
                      <div className="property__mark">
                        <span>Premium</span>
                      </div>
                    )}
                    <div className="property__name-wrapper">
                      <h1 className="property__name">{title}</h1>
                      <FavoritesButton isFavorite={isFavorite} id={id} typeButton={buttonType.BIG} />
                    </div>
                    <div className="property__rating rating">
                      <div className="property__stars rating__stars">
                        <span style={{width: getRating(rating)}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                      <span className="property__rating-value rating__value">{rating}</span>
                    </div>
                    <ul className="property__features">
                      <li className="property__feature property__feature--entire">{type}</li>
                      <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                      <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
                    </ul>
                    <div className="property__price">
                      <b className="property__price-value">&euro;120</b>
                      <span className="property__price-text">&nbsp;night</span>
                    </div>
                    <div className="property__inside">
                      <h2 className="property__inside-title">What&apos;s inside</h2>
                      <GoodsList goods={goods}  />
                    </div>
                    <div className="property__host">
                      <h2 className="property__host-title">Meet the host</h2>
                      <div className="property__host-user user">
                        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                          <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt={host.name} />
                        </div>
                        <span className="property__user-name">{host.name}</span>
                        {host.isPro && (
                          <span className="property__user-status">Pro</span>
                        )}
                      </div>
                      <div className="property__description">
                        <p className="property__text">{description}</p>
                      </div>
                    </div>

                    <section className="property__reviews reviews">
                      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                      {isDataLoadedReviews && <ReviewsList reviews={reviews} /> }
                      <ReviewsForm  />
                    </section>
                  </div>
                </div>
                <section className="property__map map">
                  {isDataLoadedOffersNearby && <Map city={offer.city} offers={[offer, ...offersNearby]} />}
                </section>
              </section>
              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">Other places in the neighbourhood</h2>
                  <div className="near-places__list places__list">
                    {isDataLoadedOffersNearby && offersNearby.map((nearOffer) => (
                      <CardItem key={nearOffer.id} offer={nearOffer} typeCard={CardType.NEARBY} />
                    ))}
                  </div>
                </section>
              </div>
            </main>
          </div>
        ) : <NotFoundPage />}
    </LoadingWrapper>
  );
}

RoomPage.propTypes = {
  offersNearby: PropTypes.arrayOf(offerProp).isRequired,
  offer: offerProp,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  loadOffer: PropTypes.func.isRequired,
  isDataLoadedOffer: PropTypes.bool.isRequired,
  isDataLoadedOffersNearby: PropTypes.bool.isRequired,
  isDataLoadedReviews: PropTypes.bool.isRequired,
  loadReviews: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  offersNearby: getOffersNearby(state),
  reviews: getReviews(state),
  isDataLoadedOffer: getIsDataLoadedOffer(state),
  isDataLoadedOffersNearby: getIsDataLoadedOffersNearby(state),
  isDataLoadedReviews: getIsDataLoadedReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOffer: (id) => {
    dispatch(fetchOffer(id));
  },
  loadOffersNearby: (id) => {
    dispatch(fetchOffersNearby(id));
  },
  loadReviews: (id) => {
    dispatch(fetchReviews(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
