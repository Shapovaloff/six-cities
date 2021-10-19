import React from 'react';
import PropTypes from 'prop-types';
import {buttonType} from '../../const';
import {fetchSetFavorites} from '../../store/api-actions';
import {useDispatch} from 'react-redux';

function FavoritesButton(props) {
  const dispatch = useDispatch();
  const {isFavorite, id, typeButton = buttonType.SMALL} = props;
  const widthIcon = typeButton === buttonType.BIG ? '31' : '18';
  const heightIcon = typeButton === buttonType.BIG ? '33' : '19';
  const property = typeButton === buttonType.BIG ? 'property' : 'place-card';

  return (
    <button
      className={`${isFavorite && `${property}__bookmark-button--active`} ${property}__bookmark-button button`}
      type="button"
      onClick={() => {
        dispatch(fetchSetFavorites({
          id,
          status: isFavorite ? 0 : 1,
        }));
      }}
    >
      <svg className={`${property}__bookmark-icon`} width={widthIcon} height={heightIcon}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

FavoritesButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  typeButton: PropTypes.string.isRequired,
};

export default FavoritesButton;
