import React, { useEffect, useState } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import { db } from '../db/courses';

const Details = () => {
  const [course, setCourse] = useState([]);

  const params = useParams();
  const { id } = params;

  const findCourse = () => {
    const result = db.find((c) => c.id == id);
    setCourse(result);
  }

  useEffect(() => {
    findCourse();
  }, [id]);

  return (
    <div className="curso-detail-container">
      <div className="curso-detail">
        <div className="curso-header">
          <img src={course.imagemUrl} alt={course.title} className="details-imagem" />
          <div className="curso-title">
            <h2>{course.title}</h2>
            <p className="curso-subtitle">{course.subtitle}</p>
          </div>
        </div>
        <div className="curso-detail-content">
          <div className="curso-description">
            <h3>Descrição do curso</h3>
            <p>{course.description}</p>
          </div>
          <div className="curso-meta">
            <h3>Informações do curso</h3>
            <ul>
              <li>
                <span>Carga horária média:</span>{course.hours}
              </li>
              <li>
                <span>Pré-requisitos:</span>{course.requirements}
              </li>
              <li>
                <span>Técnicas didáticas:</span>{course.techniques}
              </li>
              <li>
                <span>Objetivo:</span>{course.objective}
              </li>
            </ul>
          </div>
        </div>
        <div className="curso-actions">
          <button onClick={() => window.history.back()} className="back-button">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;