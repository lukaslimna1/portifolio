import React from "react";
import { useParams, Link } from "react-router-dom";
import trabalhosData, { Trabalho } from "../data/trabalhosData";
import "../estilos/trabalhoDetalhes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFigma, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import Rodape from "../componentes/rodape";

// Função para converter o título em slug
const gerarSlug = (titulo: string) =>
  titulo
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const TrabalhoDetalhes: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const trabalho: Trabalho | undefined = trabalhosData.find(
    (t) => gerarSlug(t.titulo) === slug
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
    autoplay: true,
    autoplaySpeed: 2500,
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
              link.url && (
                <a
                  key={index}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='trabalho-detalhes-link'
                >
                  {link.tipo === "github" && <FontAwesomeIcon icon={faGithub} />}
                  {link.tipo === "linkedin" && <FontAwesomeIcon icon={faLinkedin} />}
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
