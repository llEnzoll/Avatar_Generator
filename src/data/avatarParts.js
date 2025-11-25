export const avatarParts = {
  heads: [
    { id: 1, name: 'Круглая голова', emoji: '⭕', color: '#FFD700' },
    { id: 2, name: 'Квадратная голова', emoji: '⬜', color: '#87CEEB' },
    { id: 3, name: 'Овальная голова', emoji: '🥚', color: '#98FB98' },
    { id: 4, name: 'Треугольная голова', emoji: '🔺', color: '#FFB6C1' }
  ],
  
  eyes: [
    { id: 1, name: 'Большие глаза', emoji: '👀' },
    { id: 2, name: 'Закрытые глаза', emoji: '😊' },
    { id: 3, name: 'Очки', emoji: '👓' },
    { id: 4, name: 'Подмигивающий', emoji: '😉' },
    { id: 5, name: 'Сердечные глаза', emoji: '😍' }
  ],
  
  mouths: [
    { id: 1, name: 'Улыбка', emoji: '😊' },
    { id: 2, name: 'Смех', emoji: '😂' },
    { id: 3, name: 'Нейтральный', emoji: '😐' },
    { id: 4, name: 'Удивление', emoji: '😮' },
    { id: 5, name: 'Язык', emoji: '😛' }
  ],
  
  accessories: [
    { id: 1, name: 'Нет аксессуаров', emoji: '' },
    { id: 2, name: 'Очки', emoji: '🤓' },
    { id: 3, name: 'Шляпа', emoji: '🎩' },
    { id: 4, name: 'Кепка', emoji: '🧢' },
    { id: 5, name: 'Корона', emoji: '👑' },
    { id: 6, name: 'Волосы', emoji: '💇' }
  ],
  
  backgrounds: [
    { id: 1, name: 'Синий', color: '#87CEEB' },
    { id: 2, name: 'Зеленый', color: '#98FB98' },
    { id: 3, name: 'Розовый', color: '#FFB6C1' },
    { id: 4, name: 'Фиолетовый', color: '#DDA0DD' },
    { id: 5, name: 'Оранжевый', color: '#FFD700' }
  ]
};

export const getRandomPart = (partsArray) => {
  return partsArray[Math.floor(Math.random() * partsArray.length)];
};

export const generateRandomAvatar = () => {
  return {
    head: getRandomPart(avatarParts.heads),
    eyes: getRandomPart(avatarParts.eyes),
    mouth: getRandomPart(avatarParts.mouths),
    accessory: getRandomPart(avatarParts.accessories),
    background: getRandomPart(avatarParts.backgrounds)
  };
};