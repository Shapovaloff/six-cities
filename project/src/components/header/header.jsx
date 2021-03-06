import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import UserAuth from '../user-auth/user-auth';
import UserNoAuth from '../user-no-auth/user-no-auth';
import {getAuthorizationStatus} from '../../store/user/selectors';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.AUTH
                ? <UserAuth />
                : <UserNoAuth /> }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
