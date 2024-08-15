import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className='logo'>
        <img
          src='logo.png'
          alt='Logo'
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
            {" "}
            <FontAwesomeIcon
              icon={faHome}
              className='menu-link-icone'
            />{" "}
            HOME{" "}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
