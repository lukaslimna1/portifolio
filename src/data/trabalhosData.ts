// src/data/trabalhosData.ts
export interface Link {
  url?: string; // Agora é opcional
  tipo: string; // "github", "figma", "website", etc.
}

export interface Trabalho {
  id: number;
  categoria: string[];
  titulo: string;
  imagens: string[];
  tags: string[];
  descricao: string;
  links: Link[];
}

const trabalhosData: Trabalho[] = [
  {
    id: 1,
    categoria: ["Design", "Dev"],
    titulo: "Meu Portifolio",
    imagens: [
      "/img/portifolio/porti1.png",
      "/img/portifolio/porti2.png",
      "/img/portifolio/porti3.png",
    ],
    tags: ["Figma", "React", "Illustrator", "Projeto em Andamento"],
    descricao: `Este portfólio foi cuidadosamente desenvolvido para apresentar de forma abrangente meu trabalho como desenvolvedor e designer, destacando minha versatilidade e habilidades em ambas as áreas. Todo o conteúdo visual foi projetado no Figma, garantindo uma identidade visual harmoniosa e profissional. As imagens foram criadas no Illustrator, e o site foi inteiramente desenvolvido em React, demonstrando minha proficiência em tecnologias modernas e meu compromisso com a excelência técnica.
      
    O portfólio é organizado em seções como "Meus Trabalhos," que inclui projetos de "Desenvolvimento," "Design," e "Outros Trabalhos." Nessas áreas, apresento minha experiência prática, que vai desde o desenvolvimento de soluções criativas até a manutenção e montagem de microcomputadores, redes, e outras atividades relacionadas à tecnologia e inovação. Este formato permite que potenciais empregadores ou clientes explorem minhas habilidades em diferentes disciplinas, proporcionando uma visão clara de minha capacidade de adaptação e resolução de problemas. Além disso, criei uma seção dedicada ao meu currículo digital, desenvolvido inteiramente em React, oferecendo uma maneira dinâmica e interativa de apresentar minhas qualificações.

A página inicial oferece um resumo conciso sobre minha vida, formação acadêmica e trajetória profissional, proporcionando uma visão abrangente de minha evolução como profissional na área de TI e design. A identidade visual do portfólio é reforçada pela logo, projetada no Illustrator, que combina os símbolos "<" e ">", comumente associados a código e desenvolvimento, representando as letras "L" de Lucas Lima. Esta escolha simboliza a interseção entre tecnologia, criatividade e identidade pessoal, capturando a essência do meu trabalho.

Este portfólio não é apenas uma vitrine de meus projetos concluídos, mas também um espaço para compartilhar meu processo criativo e habilidades em constante evolução, tornando-o uma ferramenta essencial para me conectar com empresas e oportunidades que valorizam inovação e excelência técnica.

`,
    links: [
      { url: "https://github.com/lukaslimna1/Portifolio", tipo: "github" },
      {
        url: "https://www.figma.com/design/zv4zcwF30Kgl5f79r6xRCH/Portifolio?node-id=0-1&t=JaYwGPAk5UHbW8Uj-1",
        tipo: "figma",
      },
      {
        url: "#",
        tipo: "website",
      },
    ],
  },
  {
    id: 2,
    categoria: ["Design", "Dev"],
    titulo: "Projeto Integrador - Trampos Fácil",
    imagens: [
      "/img/trampos/tf1.png",
      "/img/trampos/tflogo.png",
      "/img/trampos/tf2.png",
      "/img/trampos/tf3.png",
      "/img/trampos/tf4.png",
      "/img/trampos/tf5.png",
      "/img/trampos/tf6.png",
    ],
    tags: [
      "UI/UX",
      "Desenvolvimento Web",
      "React",
      "Node,Js",
      "Nest.Js",
      "Projeto em Andamento",
    ],
    descricao: `O Trampo Fácil é um projeto integrador em desenvolvimento, criado como parte do curso de Desenvolvimento Full Stack. O objetivo deste projeto é construir uma plataforma de busca de emprego que seja moderna, funcional e adaptada às necessidades do mercado local em Bauru.

Minha Contribuição:
No projeto, estou responsável pelo desenvolvimento da logo e do layout da plataforma. Meu trabalho inclui a criação de uma identidade visual coesa e atraente, bem como o design de um layout intuitivo e responsivo. A meta é garantir que o site ofereça uma experiência de usuário fluida e eficiente, com uma interface visualmente agradável e fácil de navegar.

Status do Projeto:
Atualmente, o Trampo Fácil está em fase de desenvolvimento contínuo. Estamos focados em refinar o design e adicionar funcionalidades essenciais para melhorar a usabilidade e a eficácia da plataforma. O projeto é uma colaboração em andamento, e estamos trabalhando para implementar melhorias com base no feedback recebido e nas necessidades emergentes.

Objetivo do Projeto:
O Trampo Fácil tem como objetivo preencher lacunas identificadas nas plataformas de emprego existentes, oferecendo uma solução robusta para busca de vagas e gerenciamento de processos seletivos. O projeto visa facilitar a conexão entre candidatos e empregadores, promovendo o desenvolvimento econômico e profissional na região de Bauru.

Impacto Esperado:
Esperamos que, ao final do desenvolvimento, o Trampo Fácil contribua significativamente para o mercado de trabalho local, melhorando a eficiência e a satisfação tanto para candidatos quanto para empresas.`,

    links: [{ url: "https://github.com/Mortari03/trampos-bauru", tipo: "github" }],
  },

  {
    id: 3,
    categoria: ["Dev"],
    titulo: "Renata Ferreguti",
    imagens: ["link-para-imagem-c1.jpg", "link-para-imagem-c2.jpg"],
    tags: ["React", "Site"],
    descricao: `Desenvolvi um site experimental para Renata Ferreguti, candidata a vereadora de Bauru, com o objetivo de destacar sua trajetória política e seu papel como ativista dos direitos dos autistas. Renata é ex-presidente do Lions Club Autismo, política e palestrante, e o site busca evidenciar suas contribuições em várias áreas.

Contribuições:
Desenvolvimento da Página: Criação da estrutura e funcionalidades do site para apresentar a trajetória de Renata Ferreguti de maneira eficaz.
Design dos Símbolos das Deficiências: Desenvolvimento de ícones personalizados para representar as diferentes deficiências, em harmonia com o tema do site.
Integração Visual: Implementação das cores e fotos fornecidas pela equipe da campanha, garantindo alinhamento com a identidade visual da candidatura.`,
    links: [
      { url: "https://github.com/usuario/projeto-c", tipo: "github" },
      // { url: "https://www.exemplo.com/projeto-c", tipo: "website" }, // Link opcional
    ],
  },

  // Adicione mais projetos conforme necessário
];

export default trabalhosData;
