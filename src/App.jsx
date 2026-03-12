import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './index.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Hero />
        {/* Сюда потом добавишь следующие блоки */}
      </main>
    </div>
  );
}

export default App;