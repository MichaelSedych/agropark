import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        {/* Логотип */}
        <div className="header__logo logo">
          <img 
            src="./assets/logo-header.svg" 
            alt="АГРОПАРК Вавиловский Университет" 
            className="logo__img" 
          />
          <div className="logo__text">
            <span className="logo__title">АГРОПАРК</span>
            <span className="logo__subtitle">ВАВИЛОВСКИЙ УНИВЕРСИТЕТ</span>
          </div>
        </div>

        {/* Навигация */}
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#main" className="menu__link menu__link--active">Главная</a>
            </li>
            <li className="menu__item">
              <a href="#news" className="menu__link">Новости</a>
            </li>
            <li className="menu__item">
              <a href="#startups" className="menu__link">Стартапы</a>
            </li>
            <li className="menu__item">
              <a href="#services" className="menu__link">Услуги</a>
            </li>
            <li className="menu__item">
              <a href="#contacts" className="menu__link">Контакты</a>
            </li>
          </ul>
        </nav>

        {/* Кнопка входа */}
        <div className="header__actions">
          <button className="header__login-btn button button--outline">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;