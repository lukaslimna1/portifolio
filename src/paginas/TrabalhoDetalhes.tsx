import React from "react";
import { useParams, Link } from "react-router-dom";
import trabalhosData, { Trabalho } from "../data/trabalhosData";
import "../estilos/trabalhoDetalhes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; // Importando ícones
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick"; // Importando o carrossel
import Rodape from "../componentes/rodape";

const TrabalhoDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trabalho: Trabalho | undefined = trabalhosData.find(
    (t) => t.id.toString() === id
  );

  if (!trabalho) {
    return <div>Trabalho não encontrado.</div>;
  }

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 2500, // Define a velocidade do autoplay (2.5 segundos)
  };

  return (
    <div>
      <div className='trabalho-detalhes-container'>
        <div className='trabalho-detalhes-header'>
          <img
            src='/img/logo2.png'
            alt='Logo'
            className='trabalho-detalhes-logo'
          />
          <Link
            to='/trabalhos'
            className='voltar-btn'
          >
            Voltar
          </Link>
        </div>
        <h2 className='trabalho-detalhe-titulo'>{trabalho.titulo}</h2>
        {trabalho.tags.map((tag, index) => (
          <span
            key={index}
            className='trabalho-detalhes-tag'
          >
            {tag}
          </span>
        ))}
        {/* Carrossel de imagens */}
        <Slider {...settings}>
          {trabalho.imagens.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={`${trabalho.titulo} - Imagem ${index + 1}`}
              className='trabalho-detalhes-imagem'
            />
          ))}
        </Slider>
        {/* Exibir descrição com quebras de linha */}
        <p className='trabalho-detalhes-descricao'>
          {trabalho.descricao.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <div>
          <h1>Veja mais em</h1>
          {trabalho.links.map(
            (link, index) =>
              link.url && ( // Verifica se o link.url existe
                <a
                  key={index}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='trabalho-detalhes-link'
                >
                  {link.tipo === "github" && <FontAwesomeIcon icon={faGithub} />}
                  {link.tipo === "figma" && <FontAwesomeIcon icon={faFigma} />}
                  {link.tipo === "website" && <FontAwesomeIcon icon={faGlobe} />}
                </a>
              )
          )}
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default TrabalhoDetalhes;
