import React, {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import offerProp from '../app/offer.prop';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {useSelector} from 'react-redux';
import {getActiveCard} from '../../store/ui/selectors';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map(props) {
  const activeCard = useSelector(getActiveCard);
  const {offers, city} = props;
  const mapRef  = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      offers.forEach((offer) => {
        const {location, id} = offer;
        const {latitude, longitude} = location;

        leaflet
          .marker(
            {
              lat: latitude,
              lng: longitude,
            },
            {
              icon: activeCard === id ? currentCustomIcon : defaultCustomIcon,
            },
          ).addTo(markers);
      });

      map.flyTo(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        offers[0].city.location.zoom,
      );

      map.scrollWheelZoom.disable();
    }

    return () => {
      markers.clearLayers();
    };
  }, [map, offers, activeCard]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Map;
