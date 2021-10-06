import React from 'react';
import PropTypes from 'prop-types';

function GalleryList(props) {
  const {images} = props;

  return (
    <div className="property__gallery">
      {images.map((item, id) => (
        <div key={item} className="property__image-wrapper">
          <img className="property__image" src={item} alt={`Studio-${id}`}/>
        </div>
      ))}
    </div>
  );
}

GalleryList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GalleryList;
