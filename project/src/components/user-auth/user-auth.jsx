import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logout} from '../../store/action';
import {getUser} from '../../store/ui/selectors';

function UserAuth() {
  const dispatch = useDispatch();
  const userInfo = useSelector(getUser);

  const  handleClick = () => {
    dispatch(logout())
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

export default UserAuth;
