import React from 'react';
import './Avatar.css';

const Avatar = ({ avatar }) => {
  return (
    <div 
      className="avatar-container"
      style={{ backgroundColor: avatar.background.color }}
    >
      <div className="avatar">
        <div className="avatar-head" style={{ backgroundColor: avatar.head.color }}>
          <span className="head-emoji">{avatar.head.emoji}</span>
        </div>
        
        <div className="avatar-face">
          <div className="avatar-eyes">
            <span className="eyes-emoji">{avatar.eyes.emoji}</span>
          </div>
          
          <div className="avatar-mouth">
            <span className="mouth-emoji">{avatar.mouth.emoji}</span>
          </div>
        </div>
        
        {avatar.accessory.emoji && (
          <div className="avatar-accessory">
            <span className="accessory-emoji">{avatar.accessory.emoji}</span>
          </div>
        )}
      </div>
      
      <div className="avatar-info">
        <p><strong>Тип:</strong> {avatar.head.name}</p>
        <p><strong>Глаза:</strong> {avatar.eyes.name}</p>
        <p><strong>Рот:</strong> {avatar.mouth.name}</p>
        {avatar.accessory.name !== 'Нет аксессуаров' && (
          <p><strong>Аксессуар:</strong> {avatar.accessory.name}</p>
        )}
      </div>
    </div>
  );
};

export default Avatar;