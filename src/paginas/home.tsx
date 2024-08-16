import React from "react";
import "../estilos/home.css";
import Menu from "../componentes/menu";
import Rodape from "../componentes/rodape";

function Home() {
  return (
    <div className='home-background'>
      <Menu />
      {/*Primera Parte */}
      <div className='home-cima'>
        <div className='home-titulos'>
          <div className='home-titulos-principal'>
            <h1 className='home-titulos-principalh1'>
              <span className='principal'>D</span>esenvolvedor <br /> FullStack | Design
            </h1>
            <p className='home-titulos-principalp'>
              Desenvolvendo com paixão, projetando com precisão, seu próximo projeto
              começa aqui.
            </p>
          </div>
          <div className='home-titulos-secundarios'>
            <div className='home-titulos-FD'>
              <h3 className='home-titulo-auxh3'> Desenvolvedor Full Stack & Designer</h3>
              <p className='home-titulo-auxp'>
                "Formado em Análise de Sistemas e Design Gráfico, ofereço soluções
                digitais integradas que combinam funcionalidade e estética inovadora."
              </p>
            </div>
            <div className='home-titulos-HE'>
              <h3 className='home-titulo-auxh3'>Habilidades e Experiência</h3>
              <p className='home-titulo-auxp'>
                "Experiência em desenvolvimento Full Stack e design de interfaces, com um
                histórico de criação de produtos digitais eficazes e visualmente
                atraentes."
              </p>
            </div>
          </div>
        </div>
        <div className='home-foto'>
          <div className='home-perfil'></div>
        </div>
      </div>

      {/*Segunda Parte */}

      <div className='home-info-fundo'>
        <div>
          <div className='home-info'>
            <div className='home-info1'>
              <h2 className='home-infoh2'>
                <span className='principal'>D</span>esign
              </h2>
              <p className='home-infop'>
                "Embora não passe horas ajustando pixels em um artboard, estou
                profundamente envolvido na criação de experiências digitais impactantes.
                Com formação técnica em Assistência de Produção Gráfica e Web Design,
                minha paixão está em otimizar estilos e layouts para proporcionar uma
                experiência de usuário fluida e atraente."
              </p>
            </div>
            <div className='home-info2'></div>
          </div>
          <div className='home-info'>
            <div className='home-info1'></div>
            <div className='home-info2'>
              <h2 className='home-infoh2'>
                {" "}
                <span className='principal'>D</span>esenvolvimento
              </h2>
              <p className='home-infop'>
                "Como Tecnólogo em Análise e Desenvolvimento de Sistemas e Técnico em
                Desenvolvimento Full Stack, uso ferramentas e tecnologias como React.Js,
                Node.Js e MySQL para criar soluções ágeis e escaláveis. Meu objetivo é
                entregar aplicações eficientes, priorizando desempenho e escalabilidade."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Terceira Parte */}

      <div className='home-formacao'>
        <div className='home-formacao-texto'>
          <h1 className='home-formacaoh1'>Ao longo da minha formação !</h1>
          <p className='home-formacaop'>
            Desenvolvi habilidades em design e desenvolvimento de sistemas, abrangendo
            desde a criação de interfaces gráficas até o desenvolvimento de aplicações web
            completas. Com cursos em Desenvolvimento Full Stack, Web Design e Assistência
            de Produção Gráfica, estou preparado para construir soluções digitais eficazes
            e impactantes.
          </p>
          <p className='home-formacaop'>
            Atualmente, estou focado em aprimorar minhas habilidades práticas em
            tecnologias como React.Js, Node.Js e MySQL, aplicando o conhecimento adquirido
            em projetos acadêmicos e cursos técnicos.
          </p>
          <p className='home-formacaop'>
            Busco oportunidades para aplicar minha formação em projetos reais, com o
            objetivo de criar experiências digitais que sejam tanto funcionais quanto
            esteticamente agradáveis.
          </p>
          <p className='home-formacaop'>
            Em minha jornada, tenho me dedicado a aprender e aplicar conceitos de UX/UI
            para desenvolver interfaces intuitivas e de alta qualidade, sempre com o
            compromisso de entregar soluções que atendam às necessidades e expectativas
            dos usuários.
          </p>
        </div>
        <div className='home-formacao-imagem'></div>
      </div>

      {/*Quarta Parte */}
      <div>
        <div className='home-link'>
          <div className='home-link-esquerdo'>
            <div className='home-link-textos'>
              <h1 className='home-linkh1'>
                Veja o código <br />
                em Ação !
              </h1>
              <p className='home-linkp'>
                "Desenvolvo o código que dá vida às minhas interfaces, garantindo uma
                experiência de usuário suave e eficiente."
              </p>
            </div>
            <div className='home-link-btn'>
              <button className='home-linkbtn'>
                {" "}
                <span>Veja Mais</span>{" "}
              </button>
            </div>
          </div>
          {/* INICIO - Barra de separação */}
          <div className='home-link-meio'></div>
          {/* FINAL - Barra de separação */}
          <div className='home-link-direito'>
            <div className='home-link-textos'>
              <h1 className='home-linkh1'>
                Dê uma olhada
                <br />
                nos meus Designs
              </h1>
              <p className='home-linkp'>
                "Crio interfaces e telas para aplicativos e soluções digitais, tornando
                cada projeto funcional e visualmente marcante."
              </p>
            </div>
            <div className='home-link-btn'>
              <button className='home-linkbtn'>
                {" "}
                <span>Veja Mais</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Home;
