import React from "react";
import "../estilos/rodape.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Rodape() {
  return (
    <div className='rodape'>
      <div className='rodape-logo'>
        <img
          src='/img/logo1.png'
          alt='Logo Principal'
          className='rodape-logo'
        />{" "}
      </div>
      <div className='rodape-conteudo'>
        <div className='rodape-info'>
          <h2 className='rodape-titulo'>Sobre Mim</h2>
          <p className='rodape-texto'>
            Desenvolvedor Full Stack e Designer com paixão por criar soluções digitais
            inovadoras. Entre em contato para colaborações e projetos.
          </p>
        </div>
        <div className='rodape-contato'>
          <p className='rodape-texto'>
            <a
              href='tel:+5514988025296'
              className='rodape-link'
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className='rodape-icon-whats'
              />
              &nbsp; Telefone: (14) 98802-5296
            </a>
          </p>
          <p className='rodape-texto'>
            <a
              href='mailto:lucasmslima1@gmail.com'
              className='rodape-link'
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className='rodape-icon-email'
              />
              &nbsp; Email: lucasmslima1@gmail.com
            </a>
          </p>
        </div>
        <div className='rodape-redes-sociais'>
          <a
            href='https://www.linkedin.com/in/lucaslimna/'
            target='_blank'
            rel='noopener noreferrer'
            className='rodape-link'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className='rodape-icon'
            />
          </a>
          <a
            href='https://github.com/lukaslimna1'
            target='_blank'
            rel='noopener noreferrer'
            className='rodape-link'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='rodape-icon'
            />
          </a>
          <a
            href='https://www.instagram.com/lukaslimna/'
            target='_blank'
            rel='noopener noreferrer'
            className='rodape-link'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className='rodape-icon'
            />
          </a>
        </div>
      </div>
      <div className='rodape-rodape'>
        <p className='rodape-copyright'>
          © 2024 Lucas Lima. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Rodape;
