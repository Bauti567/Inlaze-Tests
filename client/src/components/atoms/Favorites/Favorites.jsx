import React, { useState } from 'react';
import './Favorites.css'; // Para los estilos específicos

const Favorites = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="favorites-container" onClick={handleClick}>
      <svg
        className={`heart-icon ${isFavorite ? 'favorite' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        fill={isFavorite ? '#e63946' : 'none'}
        stroke="#e63946"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21c-1.2 0-7-4.4-9.2-7.8C1.4 10.5 1 7.8 2.6 5.8 4.2 3.8 7 3 9 4c1.1 0 2.2.5 3 1.4C13.8 4.5 14.9 4 16 4c2-1 4.8-.2 6.4 1.8 1.6 2 1.2 4.7-1.2 7.4C19 16.6 13.2 21 12 21z" />
      </svg>
    </div>
  );
};

export default Favorites;
