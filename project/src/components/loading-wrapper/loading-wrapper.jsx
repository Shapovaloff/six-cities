import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';

function LoadingWrapper(props) {
  const {isLoad, children} = props;
  return (isLoad && children) || <LoadingScreen />;
}

LoadingWrapper.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default LoadingWrapper;
