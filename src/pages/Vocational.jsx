import React, { useState, useEffect } from 'react';
import './Vocational.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { db } from '../db/courses';


const Vocational = () => {
  const [cursos, setCursos] = useState([]);
  const [cursoExpandido, setCursoExpandido] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setCursos(db);
  }, []);

  const redirect = (url) => {
    navigate(url);
  };

  return (
    <div>
      <Header />
      <div>
        <section className="apresentacao">
          <h1>Bem-vindo aos Cursos Livres da EDUC</h1>
          <p>Nossos cursos livres oferecem uma oportunidade única de aprimoramento profissional e pessoal. Na EDUC, valorizamos a prática, a inovação e o aprendizado contínuo. Nossos cursos são ministrados por profissionais experientes e abrangem uma variedade de áreas de atuação.</p>
          <h2>Metodologia</h2>
          <p>Nossa metodologia de ensino é baseada em uma abordagem prática, que combina teoria e experiência prática. Nossos alunos têm acesso a materiais de estudo atualizados, atividades práticas e suporte contínuo dos instrutores.</p>
          <h2>Benefícios</h2>
          <ul>
            <li>Aprendizado prático e aplicável</li>
            <li>Instrutores qualificados e experientes</li>
            <li>Acesso a materiais de estudo atualizados</li>
            <li>Flexibilidade de horários</li>
            <li>Certificado de conclusão</li>
          </ul>
        </section>
        <section className="cursos">
          <h2>Cursos Disponíveis</h2>
          {cursos.map((c) => (
            <div onClick={() => redirect(`#/vocational/${c.id}`)} className="curso" key={c.id}>
              <div className="curso-content">
                <img src={c.imagemUrl} alt={c.title} className="curso-imagem" />
                <div className="curso-texto">
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <p>{c.hours}</p>
                  <hr class="card-divider" />
                  <div className="card-button">
                    <span>
                      Saiba Mais
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Vocational;
