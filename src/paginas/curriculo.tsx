import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUsers,
  faComments,
  faCode,
  faChartBar,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../estilos/curriculo.css";

function Curriculo() {
  return (
    <div className='curriculo-container'>
      <header className='curriculo-header'>
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
            Voltar para Home
          </Link>
        </div>
        <h1 className='curriculo-nome'>Lucas Lima</h1>
        <p className='curriculo-curso'>Desenvolvedor Fullstack | Web Design</p>
      </header>

      <div className='curriculo-contato'>
        <div className='contato-item'>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>lucasmslima1@gmail.com</span>
        </div>
        <div className='contato-item'>
          <FontAwesomeIcon icon={faPhone} />
          <span>(14) 98802-5296</span>
        </div>
        <div className='contato-item'>
          <FontAwesomeIcon icon={faLinkedin} />
          <a href='https://linkedin.com/in/lucaslimna'>linkedin.com/in/lucaslimna</a>
        </div>
        <div className='contato-item'>
          <FontAwesomeIcon icon={faGithub} />
          <a href='https://github.com/lukaslimna1'>github.com/lukaslimna1</a>
        </div>
      </div>

      <section className='curriculo-section formacao'>
        <h2 className='curriculo-section-title'>Formação Acadêmica</h2>
        <p>
          Universidade Anhembi Morumbi - Cursando (finalização 12/2024) | Análise e
          Desenvolvimento de Sistemas
        </p>
      </section>

      <section className='curriculo-section experiencia'>
        <h2 className='curriculo-section-title'>Experiências Profissionais</h2>
        <ul className='experiencia-lista'>
          <li>Concilig | Operador de Telemarketing | 22/01/2018 a 21/04/2018</li>
          <li>Confiança Supermercados | Operador de Caixa | 03/10/2018 a 03/06/2020</li>
          <li>C&A Modas | Operador de Caixa | 03/12/2019 a 04/02/2022</li>
          <li>Allied Brasil | Vendedor | 02/10/2022 a 13/12/2022</li>
          <li>Bem Querer Donuts | Operador de Caixa | 29/03/2022 a 09/03/2023</li>
          <li>Oba Hortifruit | Operador de Caixa | 20/03/2023 a 22/01/2024</li>
          <li>APPA (Correios) | Auxiliar de Logística | 25/01/2024 a 16/02/2024</li>
          <li>Lojão do Pereirão | Auxiliar de T.I | 21/03/2024 a 21/04/2024</li>
        </ul>
      </section>

      <section className='curriculo-section cursos'>
        <h2 className='curriculo-section-title'>Cursos Complementares</h2>
        <ul className='cursos-lista'>
          <li>SENAC Bauru | Cuidador de Idosos | Concluído</li>
          <li>Udemy | Power BI | Concluído</li>
          <li>Udemy | Arquitetura de Redes | Concluído</li>
          <li>SENAI Bauru | Manutenção de Computadores | Concluído</li>
          <li>SENAC Bauru | Assistente de Produção Gráfica | Cursando</li>
          <li>SENAC Bauru | Desenvolvimento Full Stack (React) | Cursando</li>
          <li>SENAC Bauru | Desenvolvimento Web | Cursando</li>
        </ul>
      </section>

      <section className='curriculo-section habilidades'>
        <h2 className='curriculo-section-title'>Habilidades e Competências</h2>

        <div className='habilidade-categoria'>
          <h3 className='habilidade-titulo'>
            <FontAwesomeIcon icon={faCode} /> Programação
          </h3>
          <ul className='habilidade-lista'>
            <li>Lógica de Programação</li>
            <li>HTML | CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Nest.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GIT</li>
            <li>VSCode</li>
          </ul>
        </div>

        <div className='habilidade-categoria'>
          <h3 className='habilidade-titulo'>
            <FontAwesomeIcon icon={faPaintBrush} /> Design
          </h3>
          <ul className='habilidade-lista'>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Adobe XD</li>
          </ul>
        </div>

        <div className='habilidade-categoria'>
          <h3 className='habilidade-titulo'>
            <FontAwesomeIcon icon={faUsers} /> Soft Skills
          </h3>
          <ul className='habilidade-lista'>
            <li>Trabalho em Equipe</li>
            <li>Atendimento ao Cliente</li>
            <li>Comunicação Efetiva</li>
          </ul>
        </div>

        <div className='habilidade-categoria'>
          <h3 className='habilidade-titulo'>
            <FontAwesomeIcon icon={faChartBar} /> Ferramentas
          </h3>
          <ul className='habilidade-lista'>
            <li>Power BI</li>
            <li>Office</li>
          </ul>
        </div>

        <div className='habilidade-categoria'>
          <h3 className='habilidade-titulo'>
            <FontAwesomeIcon icon={faComments} /> Idiomas
          </h3>
          <ul className='habilidade-lista'>
            <li>Português (Fluente)</li>
            <li>Inglês (Básico)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Curriculo;
