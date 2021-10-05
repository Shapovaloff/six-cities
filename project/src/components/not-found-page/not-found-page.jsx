import React from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundPage() {
  return (
    <div className="page">
      <Header />

      <main className="page__main">
        <div className="container">
          <section className="favorites">
            <h1>404. Page not found</h1>
            <a href="/">Вернуться на главную</a>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default NotFoundPage;
