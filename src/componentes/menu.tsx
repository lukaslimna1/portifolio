import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faFile } from "@fortawesome/free-solid-svg-icons";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='menu-container'>
      <div className='logo-container'>
        <img
          src='/img/logo1.png'
          alt='Logo Principal'
          className='logo-principal'
        />
        <img
          src='/img/logo.png'
          alt='Logo Alternativa'
          className='logo-alternativa'
        />
      </div>
      <button
        className='menu-toggle'
        onClick={toggleMenu}
      >
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <div className='menu-link'>
          <Link
            to='/'
            className='menu-link-texto'
          >
            <FontAwesomeIcon
              icon={faHome}
              className='menu-link-icone'
            />{" "}
            Início
          </Link>
        </div>
        <div className='menu-link'>
          <Link
            to='/trabalhos'
            className='menu-link-texto'
          >
            <FontAwesomeIcon
              icon={faBriefcase}
              className='menu-link-icone'
            />{" "}
            Trabalhos
          </Link>
        </div>
        <div className='menu-link'>
          <Link
            to='/curriculo'
            className='menu-link-texto'
          >
            <FontAwesomeIcon
              icon={faFile}
              className='menu-link-icone'
            />{" "}
            Curriculo
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
