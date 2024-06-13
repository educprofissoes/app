import React from 'react';
import './WorkWithUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../components/Chat';

function WorkWithUs() {
  return (
    <div>
      <Header />
      <div className="trabalhe-conosco">
        <h1>Trabalhe Conosco</h1>
        <p>Estamos sempre em busca de talentos para se juntar à nossa equipe. Se você é apaixonado por educação e deseja fazer parte de uma escola de cursos livres inovadora, veja nossas oportunidades de emprego abaixo.</p>
        <h1>Vagas Abertas</h1>
        <div className="vagas">
          <div className="vaga">
            <h2>Professor de Programação</h2>
            <p>Estamos procurando um professor de programação com experiência em JavaScript, React, e Node.js. Se você tem paixão por ensinar e quer fazer parte de nossa equipe, inscreva-se!</p>
            <button>Inscreva-se</button>
          </div>
          <div className="vaga">
            <h2>Designer Gráfico</h2>
            <p>Estamos em busca de um designer gráfico talentoso para criar materiais de marketing e conteúdo visual para nossos cursos. Se você é criativo e tem experiência em design gráfico, candidate-se!</p>
            <button>Inscreva-se</button>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="formulario-contato">
          <h2>Envie seu currículo</h2>
          <form>
            <div className="campo-formulario">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            <div className="campo-formulario">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="campo-formulario">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
            </div>
            <div className="campo-formulario">
              <label htmlFor="curriculo">Anexar currículo:</label>
              <input type="file" id="curriculo" name="curriculo" required />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Chat />
      <Footer />
    </div>
  );
}

export default WorkWithUs;
