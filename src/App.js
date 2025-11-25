import React, { useState, useEffect } from 'react';
import './App.css';
import Avatar from './components/Avatar/Avatar';
import Controls from './components/Controls/Controls';
import { generateRandomAvatar } from './data/avatarParts';

function App() {
  const [avatar, setAvatar] = useState(null);
  const [generationCount, setGenerationCount] = useState(0);

  // Генерация первого аватара при загрузке
  useEffect(() => {
    generateNewAvatar();
  }, []);

  const generateNewAvatar = () => {
    const newAvatar = generateRandomAvatar();
    setAvatar(newAvatar);
    setGenerationCount(prev => prev + 1);
  };

  const resetAvatar = () => {
    setAvatar(null);
    setGenerationCount(0);
    setTimeout(() => {
      generateNewAvatar();
    }, 100);
  };

  if (!avatar) {
    return (
      <div className="App">
        <div className="loading">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎭 Генератор случайных аватаров</h1>
        <p>Создайте уникального персонажа для вашего профиля!</p>
      </header>

      <main className="App-main">
        <Controls 
          onGenerate={generateNewAvatar}
          onReset={resetAvatar}
          currentAvatar={avatar}
        />
        
        <Avatar avatar={avatar} />
        
        <div className="generation-counter">
          Сгенерировано аватаров: {generationCount}
        </div>
      </main>

      <footer className="App-footer">
        <p>© 2024 Генератор аватаров. Создано с React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;