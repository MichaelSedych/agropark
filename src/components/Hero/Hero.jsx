import React from 'react';
import './Hero.css';

const Hero = () => {
  const cards = [
    { id: '01', title: 'ПЛАТФОРМА', subtitle: 'ТЕХНУМ', img: '/assets/imgIsland1.png' },
    { id: '02', title: 'ПРИЛОЖЕНИЕ', subtitle: 'СЕКТОР-ЦД', img: '/assets/imgIsland2.png' },
    { id: '03', title: 'VR ТРЕНАЖЁР', subtitle: 'ПО ОСЕМЕНЕНИЮ КОРОВ', img: '/assets/imgIsland3.png' },
  ];

  return (
    <section className="hero">
      {/* Убрали точку перед /assets */}
      <img src="/assets/imgBackgroundTop.png" alt="" className="hero__bg" />

      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            ЦЕНТР <br />
            АГРОРОБОТОТЕХНИКИ, <br />
            VR/AR ТЕХНОЛОГИЙ
          </h1>
          <p className="hero__description">
            Место, где современные технологии интегрируются в сельское хозяйство. 
            Мы специализируемся на разработке тренажеров в виртуальной реальности, 
            приложений дополненной реальности и робототехнических систем в агропромышленном комплексе.
          </p>
          <button className="hero__button button button--primary">
            Наши услуги
          </button>

          <aside className="hero__socials socials">
            <a href="#" className="socials__link"><img src="/assets/mingcute_phone-fill.svg" alt="Phone" /></a>
            <a href="#" className="socials__link"><img src="/assets/akar-icons_vk-fill.svg" alt="VK" /></a>
            <a href="#" className="socials__link"><img src="/assets/material-symbols_alternate-email-rounde.svg" alt="Email" /></a>
            <a href="#" className="socials__link"><img src="/assets/file-icons_telegram.svg" alt="Telegram" /></a>
          </aside>
        </div>

        <div className="hero__cards cards-list">
          {cards.map((card) => (
            <article key={card.id} className="cards-list__item card-island">
              <span className="card-island__number">{card.id}</span>
              <img src={card.img} alt={card.title} className="card-island__img" />
              <div className="card-island__footer">
                <div className="card-island__info">
                  <h3 className="card-island__title">{card.title}</h3>
                  <p className="card-island__subtitle">{card.subtitle}</p>
                </div>
                <button className="card-island__arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;