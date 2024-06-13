import React, { useState } from 'react';
import './Vocational.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import photo from '../assets/photo.jpg';
import design from '../assets/design.jpeg';
import marketing from '../assets/marketing.jpg';
import Chat from '../components/Chat';

const Technical = () => {
  const [cursos, setCursos] = useState([
    { id: 1, title: 'Curso de Fotografia', description: 'Aprenda os fundamentos da fotografia digital.', preco: 99.99, imagemUrl: photo },
    { id: 2, title: 'Curso de Design Gráfico', description: 'Domine as ferramentas essenciais para criar designs incríveis.', preco: 129.99, imagemUrl: design },
    { id: 3, title: 'Curso de Marketing Digital', description: 'Aprenda estratégias para promover negócios na internet.', preco: 149.99, imagemUrl: marketing },
  ]);

  const [cursoExpandido, setCursoExpandido] = useState(null);

  const toggleCurso = (id) => {
    setCursoExpandido(cursoExpandido === id ? null : id);
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
            <div className="curso" key={c.id}>
              <div className="curso-content">
                <img src={c.imagemUrl} alt={c.title} className="curso-imagem" />
                <div className="curso-texto">
                  <h3>{c.title}</h3>
                  <p>Área de Atuação: Fotografia e Arte</p>
                  <p>{c.description}</p>
                  <p>Duração: 8 semanas</p>
                  <p>Valor: {c.preco}</p>
                  <hr class="card-divider" />
                  <div className="card-button">
                    <button type="button">Saiba Mais</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Chat />
      <Footer />
    </div>
  );
};

export default Technical;
