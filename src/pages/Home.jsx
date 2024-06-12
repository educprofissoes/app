import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Card from '../components/Card';
import './Home.css'
import Chat from '../components/Chat';
const educ = require('../assets/educ.png');
const newton = require('../assets/newton.png');
const unicorp = require('../assets/unicorp.png');

function Home() {
  const images = [
    'https://s1.1zoom.me/b5050/210/376711-alexfas01_1920x1080.jpg',
    'https://www.1zoom.me/big2/818/305153-alexfas01.jpg',
    'https://i.pinimg.com/originals/26/25/84/262584729fe0d0753865c43e50ef7aa1.jpg',
  ]

  const course = [
    {
      title: "Profissionalizante",
      subjects: "Na EDUC, oferecemos uma variedade de cursos profissionalizantes em diversas áreas, com instrutores comprometidos em seu sucesso. Preparamos você para o mercado de trabalho atual, fornecendo habilidades práticas e conhecimento especializado para se destacar em sua carreira. Investindo em seu futuro conosco, você alcança seus objetivos profissionais.",
      src: educ,
      url: "#/vocational"
    },
    {
      title: "Técnico",
      subjects: "Na UNICORP, oferecemos uma variedade de cursos técnicos em diversas áreas, com instrutores dedicados ao seu sucesso. Preparamos você para as demandas do mercado atual, fornecendo habilidades práticas e conhecimento especializado para impulsionar sua carreira. Investir em um curso técnico na UNICORP é investir em seu futuro profissional, capacitando-o a alcançar seus objetivos no mercado de trabalho.",
      src: unicorp,
      url: "#/technical"
    },
    {
      title: "Idiomas",
      subjects: "Na EDUC, oferecemos uma variedade de cursos de idiomas, com instrutores dedicados ao seu sucesso linguístico. Preparamos você para a comunicação eficaz em um mundo globalizado, fornecendo habilidades práticas e conhecimento especializado em idiomas estrangeiros. Investir em um curso de idiomas na EDUC é investir em seu futuro pessoal e profissional, capacitando-o a se conectar e se comunicar de forma mais eficaz em ambientes multiculturais.",
      src: educ,
      url: "#/language"
    },
    {
      title: "Graduação Superior",
      subjects: "Na Newton, oferecemos uma ampla variedade de cursos de graduação superior, com professores dedicados ao seu sucesso acadêmico. Preparamos você para os desafios do mercado de trabalho, fornecendo uma base sólida de conhecimento e habilidades práticas. Investir em uma graduação na Newton é investir em seu futuro profissional, capacitando-o a alcançar seus objetivos de carreira.",
      src: newton,
      url: "#/degree"
    },
  ]

  return (
    <div className="home-container">
      <Header />
      <Carousel images={images} />
      <h2 className="card-container-title">Conheça nossos cursos</h2>
      <div className="card-container">
        {
          course.map((c) => (
            <Card
              title={c.title}
              subject={c.subjects}
              image={c.src}
              redirect={c.url}
            />
          ))
        }
      </div>
      <Footer />
      <Chat />
    </div>
  );
}

export default Home;
