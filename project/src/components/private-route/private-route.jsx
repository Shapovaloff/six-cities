import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute, AuthorizationStatus} from '../../const';
import {connect} from 'react-redux';
import LoadingWrapper from '../loading-wrapper/loading-wrapper';
import {Redirect, Route} from 'react-router-dom';

function PrivateRoute(props) {
  const {authorizationStatus, render, path, exact, status = AuthorizationStatus.AUTH, redirect = AppRoute.SIGN_IN} = props;

  return (
    <LoadingWrapper isLoad={authorizationStatus !== AuthorizationStatus.UNKNOWN}>
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => authorizationStatus === status
          ? render(routeProps)
          : <Redirect to={redirect} />}
      />
    </LoadingWrapper>
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  status: PropTypes.string,
  redirect: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default  connect(mapStateToProps, null)(PrivateRoute);
