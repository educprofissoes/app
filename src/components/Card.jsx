import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, subject, image, id }) => {

  const navigate = useNavigate();
  
  const redirect = (url) => {
    navigate(url);
  };

  return (
    <div onClick={() => redirect(`${id}`)} class="project-card">
      <img src={image} alt="course card" />
      <div class="project-overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
