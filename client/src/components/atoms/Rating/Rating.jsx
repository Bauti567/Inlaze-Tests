import React from 'react';
import './Rating.css'; // Para los estilos específicos

const Rating = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="rating-container">
      <svg className="rating-circle" width="120" height="120">
        <circle
          className="rating-background"
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="10"
        />
        <circle
          className="rating-progress"
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#4caf50"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="rating-text">
        {percentage}%
      </div>
    </div>
  );
};

export default Rating;
