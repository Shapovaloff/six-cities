import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import {getRating} from '../../utils';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute, CardType} from '../../const';

function CardItem(props) {
  const {offer, typeCard = CardType.MAIN} = props;
  const {id, isPremium, rating, isFavorite, previewImage, price, type, title} = offer;
  const imgPreviewWidth = typeCard === CardType.FAVORITES ? '150' : '260';
  const imgPreviewHeight = typeCard === CardType.FAVORITES ? '110' : '200';

  return (
    <article className={`${typeCard === CardType.MAIN ? `${typeCard}__place-card` : `${typeCard}__card`} place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${typeCard}__image-wrapper place-card__image-wrapper`}>
        <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>
          <img className="place-card__image" src={previewImage} width={imgPreviewWidth} height={imgPreviewHeight} alt={title} />
        </Link>
      </div>
      <div className={`${typeCard === CardType.FAVORITES && 'favorites__card-info'}  place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite && 'place-card__bookmark-button--active'} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

CardItem.propTypes = {
  offer: offerProp,
  typeCard: PropTypes.string,
};

export default CardItem;
