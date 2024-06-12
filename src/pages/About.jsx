import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css'
const school1 = require('../assets/escola-1.jpg');
const school2 = require('../assets/escola-2.jpg');
const school3 = require('../assets/escola-3.jpg');
const professor1 = require('../assets/professor-1.jpg');
const professor2 = require('../assets/professor-2.png');
const professor3 = require('../assets/professor-3.jpg');

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="about-header">
          <h2>Sobre a EDUC</h2>
        </div>
        <div className="about-content">
          <div className="about-section">
            <h3>Nossa Missão</h3>
            <p>Bem-vindo à EDUC!
              Somos uma escola de cursos livres comprometida em transformar vidas por meio da educação. Desde nossa fundação, buscamos oferecer oportunidades de aprendizado dinâmicas e acessíveis, capacitando nossos alunos a alcançar seus objetivos pessoais, profissionais e acadêmicos.
              Na EDUC, acreditamos que a educação é a chave para o sucesso. Nossos cursos são cuidadosamente projetados para fornecer conhecimento prático e relevante, preparando nossos alunos para os desafios do mundo real. Com uma equipe de instrutores experientes e uma variedade de programas educacionais, estamos empenhados em fornecer uma experiência de aprendizado enriquecedora e significativa.
              Nosso compromisso vai além da sala de aula. Promovemos um ambiente inclusivo e colaborativo, onde os alunos são incentivados a explorar seus interesses, desenvolver suas habilidades e alcançar seu pleno potencial. Valorizamos a diversidade, a criatividade e a excelência acadêmica, e trabalhamos para criar uma comunidade educacional vibrante e inspiradora.
              Junte-se a nós na jornada rumo ao conhecimento e ao crescimento pessoal. Na EDUC, estamos aqui para ajudá-lo a trilhar o caminho para um futuro de sucesso e realizações.
              Seja bem-vindo à EDUC, onde o aprendizado é para todos!
            </p>
          </div>
          <div className="vertical-line"></div>
          <div className="about-section">
            <h3>Nossos Valores</h3>
            <ul>
              <p>Na EDUC, nossos valores fundamentais são o alicerce de tudo o que fazemos. Eles moldam nossa cultura, guiam nossas ações e definem nossa identidade como instituição educacional comprometida com a excelência. Aqui estão alguns dos valores que orientam nosso trabalho:</p>
              <li>Excelência: Buscamos a excelência em tudo o que fazemos. Desde o desenvolvimento de nossos cursos até a interação com nossos alunos, nos esforçamos para alcançar os mais altos padrões de qualidade e desempenho.</li>
              <li>Integridade: Agimos com honestidade, transparência e ética em todas as nossas relações e operações. Valorizamos a integridade como princípio fundamental e nos esforçamos para manter a confiança e o respeito de nossa comunidade educacional.</li>
              <li>Inovação: Abraçamos a inovação como um meio de impulsionar o progresso e a melhoria contínua. Estamos sempre em busca de novas ideias, métodos e tecnologias para enriquecer a experiência de aprendizado de nossos alunos e promover a inovação em educação.</li>
              <li>Diversidade e Inclusão: Valorizamos e celebramos a diversidade em todas as suas formas. Reconhecemos que cada pessoa traz uma perspectiva única e valiosa para nossa comunidade educacional. Promovemos a inclusão e o respeito mútuo, criando um ambiente acolhedor e colaborativo para todos.</li>
              <li>Empoderamento: Acreditamos no poder da educação para capacitar as pessoas a transformarem suas vidas. Estamos comprometidos em fornecer recursos, oportunidades e suporte para que nossos alunos atinjam seu pleno potencial e alcancem seus objetivos pessoais e profissionais.</li>
              <p>Esses valores representam o cerne da nossa missão e nos inspiram a continuar avançando na busca pela excelência educacional e pelo sucesso de nossos alunos.</p>
            </ul>
          </div>
          <div className="horizontal-line"></div>
          <div className="about-section">
            <h3>Nossa Escola</h3>
            <p>Nossas instalações...</p>
            <div className="facility-images">
              <img src={school1} alt="Facility 1" />
              <img src={school2} alt="Facility 2" />
              <img src={school3} alt="Facility 3" />
            </div>
          </div>
          <div className="about-section">
            <h3>Nossa Equipe</h3>
            <p>Nosso time de instrutores dedicados...</p>
            <div className="team-images">
              <img src={professor1} alt="Teacher 1" />
              <img src={professor2} alt="Teacher 2" />
              <img src={professor3} alt="Teacher 3" />
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default About;