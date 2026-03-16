import React from 'react';
import './Hero.scss';

const Hero = () => {
  const cards = [
    { id: '01', title: 'ПЛАТФОРМА', desc: 'ТЕХНУМ', img: '/assets/imgIsland1.png' },
    { id: '02', title: 'ПРИЛОЖЕНИЕ', desc: 'СЕКТОР-ЦД', img: '/assets/imgIsland2.png' },
    { id: '03', title: 'VR ТРЕНАЖЁР', desc: 'ПО ОСЕМЕНЕНИЮ КОРОВ', img: '/assets/imgIsland3.png' }
  ];

  return (
    <section className="hero">
      <div className="hero__container container">
        
        <div className="hero__content">
          <h1 className="hero__title">
            ЦЕНТР <br />
            <span className="hero__title--accent">АГРОРОБОТЕХНИКИ, VR/AR ТЕХНОЛОГИЙ</span>
          </h1>
          
          <p className="hero__text">
            Место, где современные технологии интегрируются в сельское хозяйство. 
            Мы специализируемся на разработке тренажеров в виртуальной реальности, 
            приложений дополненной реальности и робототехнических систем 
            в агропромышленном комплексе.
          </p>
          
          <button className="hero__btn button button--primary">Наши услуги</button>

          {/* Теперь сошиал ровно под кнопкой */}
          <div className="hero__socials socials">
            <a href="#" className="socials__link"><img src="/assets/mingcute_phone-fill.svg" alt="Phone" /></a>
            <a href="#" className="socials__link"><img src="/assets/akar-icons_vk-fill.svg" alt="VK" /></a>
            <a href="#" className="socials__link"><img src="/assets/material-symbols_alternate-email-rounde.svg" alt="Email" /></a>
            <a href="#" className="socials__link"><img src="/assets/file-icons_telegram.svg" alt="TG" /></a>
          </div>
        </div>

        <div className="hero__footer">
          <div className="hero__slider slider">
            <div className="slider__list">
              {cards.map(card => (
                <article key={card.id} className="slider__card card">
                  <span className="card__number">{card.id}</span>
                  <img src={card.img} alt={card.title} className="card__bg" />
                  <div className="card__info">
                    <h3 className="card__title">{card.title}</h3>
                    <p className="card__subtitle">{card.desc}</p>
                  </div>
                  <div className="card__arrow">→</div>
                </article>
              ))}
            </div>
            <button className="slider__btn-next">›</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;