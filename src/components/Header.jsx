import React, { useState } from 'react';
import './Header.css';
const dropDown = require('../assets/dropdown.png');
const educ = require('../assets/educ.png');
const instagram = require('../assets/instagram.png');
const whatsapp = require('../assets/whatsapp.png');
const email = require('../assets/email.png');

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };

  return (
    <div className="header-container">
      <div className="menu-container">
        <a href="/#/">
          <img className='educ-icon' src={educ} alt="menu" />
        </a>
        <button className="menu-button" type="button" aria-label="Abrir menu" onClick={toggleModal}>
          button</button>
      </div>
      <nav className="navigation-bar">
        <div className="dropdown">
          <a href="" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            Cursos
            <img className="dropdown-img" src={dropDown} alt="dropdown" />
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="/vocational">Profissionalizantes</a>
                <a href="/#/technical">Técnicos</a>
                <a href="/#/degree">Graduações</a>
                <a href="/#/language">Idiomas</a>
              </div>
            )}
          </a>
        </div>
        <a href="/#/about">Sobre</a>
        <a href="/#/work-with-us">Trabalhe Conosco</a>
      </nav>
      <div className='social-links-container'>
        <a href="https://www.instagram.com/educprofissoes/" target="_blank">
          <img className="social-media-icon" src={instagram} alt="instagram" />
        </a>
        <a href="https://wa.me/553135194667" target="_blank">
          <img className="social-media-icon" src={whatsapp} alt="whatsapp" />
        </a>
        <a href="mailto:centroeducacionalcontagem@gmail.com" target="_blank">
          <img className="social-media-icon" src={email} alt="email" />
        </a>
      </div>
      {isModalOpen && (
        <>
          <div className="body-blur"></div>
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={toggleModal}>&times;</span>
              <a href="www.google.com.br">Lorem Ipsum</a>
              <a href="www.google.com.br">Lorem Ipsum</a>
              <a href="www.google.com.br">Lorem Ipsum</a>
              <a href="www.google.com.br">Lorem Ipsum</a>
              <a href="www.google.com.br">Lorem Ipsum</a>
              <a href="www.google.com.br">Lorem Ipsum</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


export default Header;
