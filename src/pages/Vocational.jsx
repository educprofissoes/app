import React, { useState, useEffect } from 'react';
import './Vocational.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../components/Chat';
import { db } from '../db/courses';
import Card from '../components/Card';


const Vocational = () => {
  const [cursos, setCursos] = useState([]);
  const [cursoExpandido, setCursoExpandido] = useState(null);

  useEffect(() => {
    setCursos(db);
  }, []);

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
        <h2 className="available-courses">Cursos Disponíveis</h2>
        <section className="cursos">
          {cursos.map((c) => (
            <Card
              title={c.title}
              subject={c.description}
              image={c.imagemUrl}
              id={c.id}
              key={c.id}
            />
          ))}
        </section>
      </div >
      <Chat />
      <Footer />
    </div >
  );
};

export default Vocational;
