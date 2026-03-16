import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <img src="/assets/logo-header.svg" alt="АГРОПАРК ВАВИЛОВСКИЙ УНИВЕРСИТЕТ" />
        </div>
        
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="#main" className="nav__link nav__link--active">Главная</a></li>
            <li className="nav__item"><a href="#news" className="nav__link">Новости</a></li>
            <li className="nav__item"><a href="#startups" className="nav__link">Стартапы</a></li>
            <li className="nav__item"><a href="#services" className="nav__link">Услуги</a></li>
            <li className="nav__item"><a href="#contacts" className="nav__link">Контакты</a></li>
          </ul>
        </nav>

        <button className="header__btn button button--outline">Войти</button>
      </div>
    </header>
  );
};

export default Header;