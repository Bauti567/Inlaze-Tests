import React from 'react';
import './Card.css'; // Asegúrate de crear un archivo CSS para estilos

function Card({ imageSrc, title, date }) {
  return (
    <div className="card-container">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-date">{date}</p>
        <div className="card-footer">
          <div className="card-rating">
            {/* Aquí irá el componente Rating */}
            <p>Aqui va rating0</p>
          </div>
          <div className="card-favorites">
            {/* Aquí irá el componente Favorites */}
            <p>Aqui va favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
