import React from "react";
import Rodape from "../componentes/rodape";
import { Link } from "react-router-dom";
import "../estilos/curriculo.css";

function Curriculo() {
  return (
    <div>
      <div>
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
        <header>
          <h1 className='Lucas'>Lucas Lima</h1>
          <p>Análise e Desenvolvimento de Sistemas</p>
        </header>

        <nav>
          <ul>
            <li>
              <a href='#contato'>Contato</a>
            </li>
            <li>
              <a href='#formacao'>Formação Acadêmica</a>
            </li>
            <li>
              <a href='#experiencia'>Experiência</a>
            </li>
            <li>
              <a href='#cursos'>Cursos Complementares</a>
            </li>
            <li>
              <a href='#habilidades'>Habilidades</a>
            </li>
          </ul>
        </nav>

        <section id='contato'>
          <h2>Contato</h2>
          <p>
            Email: <a href='mailto:lucasmslima1@gmail.com'>lucasmslima1@gmail.com</a>
          </p>
          <p>Telefone: (14) 98802-5296 (WhatsApp), (14) 99609-9191 (Recado)</p>
          <p>Endereço: Rodolfina Dias Domingues 1-37, Bauru - SP, Brasil</p>
          <p>Data de Nascimento: 24 de Maio de 1994</p>
          <p>
            Linktree:{" "}
            <a href='https://linktr.ee/lucasmslima'>https://linktr.ee/lucasmslima</a>
          </p>
        </section>

        <section id='formacao'>
          <h2>Formação Acadêmica</h2>
          <table>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Instituição</th>
                <th>Período</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tecnólogo - Análise e Desenvolvimento de Sistemas</td>
                <td>Universidade Anhembi Morumbi - EAD</td>
                <td>20/10/22 - Cursando</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id='experiencia'>
          <h2>Experiência</h2>
          <table>
            <thead>
              <tr>
                <th>Cargo</th>
                <th>Empresa</th>
                <th>Período</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operador de Telemarketing</td>
                <td>Concilig</td>
                <td>22/01/18 - 21/04/18</td>
              </tr>
              <tr>
                <td>Operador de Caixa</td>
                <td>Confiança Supermercados</td>
                <td>03/10/18 - 03/06/20</td>
              </tr>
              <tr>
                <td>Operador de Caixa</td>
                <td>C&A Modas</td>
                <td>03/12/19 - 04/02/22</td>
              </tr>
              <tr>
                <td>Vendedor</td>
                <td>Allied Brasil</td>
                <td>02/10/22 - 13/12/22</td>
              </tr>
              <tr>
                <td>Operador de Caixa</td>
                <td>Bem Querer Donuts</td>
                <td>29/03/22 - 09/03/23</td>
              </tr>
              <tr>
                <td>Operador de Caixa</td>
                <td>Oba Hortifute</td>
                <td>20/03/23 - 22/01/24</td>
              </tr>
              <tr>
                <td>Auxiliar de Logística</td>
                <td>APPA (Correios)</td>
                <td>25/01/24 - 16/02/24</td>
              </tr>
              <tr>
                <td>Auxiliar de TI</td>
                <td>Lojão do Pereirão</td>
                <td>21/03/24 - 21/04/24</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id='cursos'>
          <h2>Cursos Complementares</h2>
          <div>
            <ul className='lista-cursos'>
              <li>
                <span className='titulo-curso'>Técnico em Desenvolvimento FullStack</span>
                <span className='instituicao'>SENAC Bauru</span>
                <span className='situacao'>(Cursando)</span>
              </li>
              <li>
                <span className='titulo-curso'>Web Designer</span>
                <span className='instituicao'>SENAC Bauru</span>
                <span className='situacao'>(Cursando)</span>
              </li>
              <li>
                <span className='titulo-curso'>
                  Santander Coders 2023.2 - Web Front-End
                </span>
                <span className='instituicao'>ADA Tech</span>
                <span className='situacao'>(Concluído)</span>
              </li>
              <li>
                <span className='titulo-curso'>Power BI Completo</span>
                <span className='instituicao'>Udemy</span>
                <span className='situacao'>(Concluído)</span>
              </li>
              <li>
                <span className='titulo-curso'>Fundamentos Big Data 3.0</span>
                <span className='instituicao'>Data Science Academy</span>
                <span className='situacao'>(Concluído)</span>
              </li>
              <li>
                <span className='titulo-curso'>Get Connected</span>
                <span className='instituicao'>Cisco Networking Academy</span>
                <span className='situacao'>(Concluído)</span>
              </li>
              <li>
                <span className='titulo-curso'>Manutenção de Micro e Impressoras</span>
                <span className='instituicao'>SENAI Bauru</span>
                <span className='situacao'>(Concluído)</span>
              </li>
              <li>
                <span className='titulo-curso'>
                  Técnico em Assistente de Produção Gráfica
                </span>
                <span className='instituicao'>SENAC Bauru</span>
                <span className='situacao'>(Concluído)</span>
              </li>
              <li>
                <span className='titulo-curso'>Santander Bootcamp 2024 - JAVA</span>
                <span className='instituicao'>DIO</span>
                <span className='situacao'>(Cursando)</span>
              </li>
              <li>
                <span className='titulo-curso'>Arquitetura de Redes</span>
                <span className='instituicao'>Udemy</span>
                <span className='situacao'>(Cursando)</span>
              </li>
              <li>
                <span className='titulo-curso'>Desenvolvimento Mobile</span>
                <span className='instituicao'>Udemy</span>
                <span className='situacao'>(Cursando)</span>
              </li>
            </ul>
          </div>
        </section>

        <section id='habilidades'>
          <h2>Habilidades e Competências</h2>
          <table className='grid-habilidades'>
            <tr>
              <td>
                <h3>Design</h3>
                <ul>
                  <li>Adobe InDesign</li>
                  <li>Adobe XD</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Figma</li>
                </ul>
              </td>
              <td>
                <h3>Programação</h3>
                <ul>
                  <li>Lógica de Programação</li>
                  <li>MySQL</li>
                  <li>Kotlin</li>
                  <li>Java</li>
                  <li>Node.js</li>
                  <li>React.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </td>
              <td>
                <h3>Outras Habilidades</h3>
                <ul>
                  <li>Português</li>
                  <li>Trabalho em Equipe</li>
                  <li>Comunicação Efetiva</li>
                  <li>Atendimento ao Cliente</li>
                  <li>Pacote Office</li>
                  <li>Power BI</li>
                  <li>VSCode</li>
                  <li>GIT</li>
                  <li>Android Studio</li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      </div>
      <Rodape />
    </div>
  );
}

export default Curriculo;
