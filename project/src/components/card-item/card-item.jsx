import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import {getRating} from '../../utils';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute, buttonType, CardType} from '../../const';
import {changeActiveCard} from '../../store/action';
import {useDispatch} from 'react-redux';
import FavoritesButton from '../favorites-button/favorites-button';

function CardItem(props) {
  const dispatch = useDispatch();
  const {offer, typeCard = CardType.MAIN} = props;
  const {id, isPremium, rating, isFavorite, previewImage, price, type, title} = offer;
  const imgPreviewWidth = typeCard === CardType.FAVORITES ? '150' : '260';
  const imgPreviewHeight = typeCard === CardType.FAVORITES ? '110' : '200';

  return (
    <article
      onMouseEnter={() => typeCard === CardType.MAIN && dispatch(changeActiveCard(id))}
      onMouseLeave={() => typeCard === CardType.MAIN && dispatch(changeActiveCard(null))}
      className={`${typeCard === CardType.MAIN ? `${typeCard}__place-card` : `${typeCard}__card`} place-card`}
    >
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
          <FavoritesButton isFavorite={isFavorite} id={id} typeButton={buttonType.SMALL} />
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
