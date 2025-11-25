import React from 'react';
import './Controls.css';

const Controls = ({ onGenerate, onReset, currentAvatar }) => {
  return (
    <div className="controls-container">
      <h2>Генератор случайных аватаров</h2>
      <p>Создайте уникального персонажа одним нажатием!</p>
      
      <div className="buttons-container">
        <button 
          className="btn generate-btn"
          onClick={onGenerate}
        >
          🎲 Сгенерировать аватар
        </button>
        
        <button 
          className="btn reset-btn"
          onClick={onReset}
        >
          🔄 Сбросить
        </button>
      </div>
      
      <div className="stats">
        <p>Текущий аватар: {currentAvatar.head.name}</p>
      </div>
      
      <div className="features">
        <h3>Возможности:</h3>
        <ul>
          <li>🎨 Случайная комбинация черт лица</li>
          <li>👓 Различные аксессуары</li>
          <li>🌈 Цветные фоны</li>
          <li>😊 Эмодзи-стиль</li>
        </ul>
      </div>
    </div>
  );
};

export default Controls;