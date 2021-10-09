import React from 'react';
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
import {CardType} from '../../const';
import Map from '../map/map';
import {connect} from 'react-redux';

function RoomPage(props) {
  const {offers, reviews} = props;
  const params = useParams();
  const roomId = +params.id;
  const offer = offers.find((item) => item.id === roomId);
  const nearOffers = offers.slice(0, 3);
  const {images, goods, isPremium, title, rating, type, bedrooms, maxAdults, description, host} = offer;

  return (
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
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
                <ReviewsList reviews={reviews} />

                <ReviewsForm  />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={offer.city} offers={[offer, ...nearOffers]} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((nearOffer) => (
                <CardItem key={nearOffer.id} offer={nearOffer} typeCard={CardType.NEARBY} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
});

export default connect(mapStateToProps, null)(RoomPage);
