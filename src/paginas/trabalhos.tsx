import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../estilos/trabalho.css";
import trabalhosData, { Trabalho } from "../data/trabalhosData";
import Rodape from "../componentes/rodape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFigma, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPalette, faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";

// Função para converter o título em slug
const gerarSlug = (titulo: string) =>
  titulo
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const Trabalhos: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("categoria") || ""; // Obter a categoria da URL

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  useEffect(() => {
    // Atualiza a categoria selecionada se a URL mudar
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredTrabalhos = selectedCategory
    ? trabalhosData.filter((trabalho) => trabalho.categoria.includes(selectedCategory))
    : trabalhosData;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className='trabalhos-container'>
        <div className='trabalhos-header'>
          <img
            src='/img/logo2.png'
            alt='Logo'
            className='trabalhos-logo'
          />
          <Link
            to='/'
            className='voltar-btn'
          >
            <span>Voltar para Home</span>
          </Link>
        </div>

        <div>
          <h1 className='trabalho-h1'>
            <span className='principal-span'>M</span>eus Trabalhos
          </h1>
          <p className='trabalho-p'>Aqui você encontra um pouco do que eu faço!</p>
        </div>

        <div className='filter-container'>
          <button
            onClick={() => handleCategoryChange("")}
            className='filter-button'
          >
            Todas
          </button>
          <button
            onClick={() => handleCategoryChange("Design")}
            className='filter-button'
          >
            <FontAwesomeIcon icon={faPalette} /> Design
          </button>
          <button
            onClick={() => handleCategoryChange("Dev")}
            className='filter-button'
          >
            <FontAwesomeIcon icon={faCode} /> Desenvolvimento
          </button>
          <button
            onClick={() => handleCategoryChange("Outros")}
            className='filter-button'
          >
            <FontAwesomeIcon icon={faDesktop} /> Outros
          </button>
        </div>

        <div className='trabalhos-list'>
          {filteredTrabalhos.map((trabalho: Trabalho) => (
            <div
              key={trabalho.id}
              className='trabalho-card'
            >
              <Link
                to={`/trabalhos/${gerarSlug(trabalho.titulo)}`} // Atualiza para usar slug
                className='trabalho-link'
              >
                {trabalho.imagens.length > 0 && (
                  <img
                    src={trabalho.imagens[0]}
                    alt={trabalho.titulo}
                    className='trabalho-imagem'
                  />
                )}
                <h3 className='trabalho-titulo'>{trabalho.titulo}</h3>
                <div className='trabalho-tags'>
                  {trabalho.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='trabalho-tag'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className='trabalho-descricao'>
                  {trabalho.descricao.length > 110
                    ? `${trabalho.descricao.substring(0, 110)}...`
                    : trabalho.descricao}
                </p>
                <div className='trabalho-links'>
                  {trabalho.links.map(
                    (link, index) =>
                      link.url && (
                        <span
                          key={index}
                          className='trabalho-link-icon'
                        >
                          {link.tipo === "github" && <FontAwesomeIcon icon={faGithub} />}
                          {link.tipo === "linkedin" && (
                            <FontAwesomeIcon icon={faLinkedin} />
                          )}
                          {link.tipo === "figma" && <FontAwesomeIcon icon={faFigma} />}
                          {link.tipo === "website" && <FontAwesomeIcon icon={faGlobe} />}
                        </span>
                      )
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Trabalhos;
