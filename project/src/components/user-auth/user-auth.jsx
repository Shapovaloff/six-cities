import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logout} from '../../store/action';

function UserAuth({userInfo, logoutRoom}) {
  const  handleClick = () => {
    logoutRoom();
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img style={{ borderRadius: '50%' }} src={userInfo.avatarUrl} alt={'user'} />
          </div>
          <span className="header__user-name user__name">{userInfo.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.MAIN}>
          <span className="header__signout" onClick={handleClick}>Sign out</span>
        </Link>
      </li>
    </>
  );
}

UserAuth.propTypes = {
  userInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  logoutRoom: PropTypes.func.isRequired,
};

const mapStateToProps = ({UI}) => ({
  userInfo: UI.user,
});

const mapDispatchToProps = (dispatch) => ({
  logoutRoom: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
