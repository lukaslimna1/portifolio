import React from "react";
import "../estilos/home.css";
import Menu from "../componentes/menu";

function Home() {
  return (
    <div className='home-background'>
      <Menu />
      <div className='home-cima'>
        <div>
          <h1 className='home-titulo'>
            Desenvolvedor <br /> Full Stack | Design
          </h1>
          <div>
            <p className='home-subtitulo'>
              "Desenvolvendo com paixão, projetando com precisão,
              <br /> seu próximo projeto começa aqui."
            </p>
          </div>
        </div>
        <div className='home-perfil'></div>
        <div className='home-chamada-fundo'>
          <div className='home-chamada1'>
            <h3 className='chamada-h3'>Full Stack e Designer</h3>
            <p className='chamada-p'>
              "Formado em Análise de Sistemas e Design Gráfico, criando soluções digitais
              completas e impactantes."
            </p>
          </div>
          <div className='home-chamada2'>
            <h3 className='chamada-h3'>Habilidades e Experiência</h3>
            <p className='chamada-p'>
              "Especialista em desenvolvimento Full Stack e design de interfaces.
              Experiência em entregar produtos digitais inovadores e funcionais."
            </p>
          </div>
        </div>
      </div>
      <div className='home-design-dev-fundo'>
        <div className='home-design'>
          <h2 className='home-dd-titulo'>Design</h2>
          <p className='home-dd-texto'>
            "Embora não passe horas ajustando pixels em um artboard, estou profundamente
            envolvido na criação de experiências digitais impactantes. Com formação
            técnica em Assistência de Produção Gráfica e Web Design, minha paixão está em
            otimizar estilos e layouts para proporcionar uma experiência de usuário fluida
            e atraente."
          </p>
        </div>
        <div className='home-dev'>
          <h2 className='home-dd-titulo'>Desenvolvimento</h2>
          <p className='home-dd-texto'>
            "Como Tecnólogo em Análise e Desenvolvimento de Sistemas e Técnico em
            Desenvolvimento Full Stack, uso ferramentas e tecnologias como React.Js,
            Node.Js e MySQL para criar soluções ágeis e escaláveis. Meu objetivo é
            entregar aplicações eficientes, priorizando desempenho e escalabilidade."
          </p>
        </div>
      </div>
      <div className='home-formacao'>
        <div className='home-container-formacao'>
          <h1 className='home-formacao-titulo'>Ao longo da minha formação !</h1>
          <p className='home-formacao-texto'>
            Desenvolvi habilidades em design e desenvolvimento de sistemas, abrangendo
            desde a criação de interfaces gráficas até o desenvolvimento de aplicações web
            completas. Com cursos em Desenvolvimento Full Stack, Web Design e Assistência
            de Produção Gráfica, estou preparado para construir soluções digitais eficazes
            e impactantes.
          </p>
          <p className='home-formacao-texto'>
            Atualmente, estou focado em aprimorar minhas habilidades práticas em
            tecnologias como React.Js, Node.Js e MySQL, aplicando o conhecimento adquirido
            em projetos acadêmicos e cursos técnicos.
          </p>
          <p className='home-formacao-texto'>
            Busco oportunidades para aplicar minha formação em projetos reais, com o
            objetivo de criar experiências digitais que sejam tanto funcionais quanto
            esteticamente agradáveis.
          </p>
          <p className='home-formacao-texto'>
            Em minha jornada, tenho me dedicado a aprender e aplicar conceitos de UX/UI
            para desenvolver interfaces intuitivas e de alta qualidade, sempre com o
            compromisso de entregar soluções que atendam às necessidades e expectativas
            dos usuários.
          </p>
        </div>
        <div className='home-img-formacao'></div>
      </div>
      <div className='home-links-container'>
        <div className='home-links-esquerdo'>
          <h1 className='home-links-titulo'>Veja o código em Ação !</h1>
          <p className='home-links-paragrafo'>
            "Desenvolvo o código que dá vida às minhas interfaces, garantindo uma
            experiência de usuário suave e eficiente."
          </p>
          <button className='home-link-btn'>
            {" "}
            <span>Veja Mais</span>{" "}
          </button>
        </div>
        <div className='home-links-wave'></div>
        <div className='home-links-direito'>
          <h1 className='home-links-titulo'>Dê uma olhada nos meus Designs</h1>
          <p className='home-links-paragrafo'>
            "Crio interfaces e telas para aplicativos e soluções digitais, tornando cada
            projeto funcional e visualmente marcante."
          </p>
          <button className='home-link-btn'>
            {" "}
            <span> Veja Mais</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
