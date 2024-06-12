import React from 'react';
import './Footer.css';
const educ = require('../assets/educ.png');
const newton = require('../assets/newton.png');
const unicorp = require('../assets/unicorp.png');
const gps = require('../assets/gps.png');

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <img src={educ} alt="educ logo" />
          <img src={newton} alt="newton logo" />
          <img src={unicorp} alt="unicorp logo" />
        </div>
        <div className="links-container">
          <span>Lorem</span>
          <a href="">Lorem ipsum</a>
          <a href="">dolor sit</a>
          <a href="">amet</a>
          <a href="">consectetur adipiscing</a>
          <a href="">elit Morbi</a>
          <a href="">ante tellus</a>
        </div>
        <div className="links-container">
          <span>sagittis</span>
          <a href="">vel tempor</a>
          <a href="">a viverra</a>
          <a href="">sed odio</a>
          <a href="">Ut pretium lacus</a>
          <a href="">eu felis</a>
          <a href="">suscipit in aliquam</a>
        </div>
      </div>
      <hr className="divider" />
      <div className="lower-footer" >
        <div className="copyright">
          &copy; 2024 Centro Educacional EAD Contagem. Todos os direitos reservados.
        </div>
        <div>
          <img src={gps} alt="GPS" />
          <span>Av. João César de Oliveira, 3216 - Eldorado, Contagem - MG, 32340-000</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
