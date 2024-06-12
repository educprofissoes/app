import React from 'react';
import './Card.css';

const Card = ({ title, subject, image, redirect }) => {
  return (
    <div class="project-card">
      <img src={image} alt="course card" />
      <div class="project-overlay">
        <h3>{title}</h3>
        <p>{subject}</p>
        <a href={redirect}>Ver Lista de cursos</a>
      </div>
    </div>
  );
};

export default Card;
