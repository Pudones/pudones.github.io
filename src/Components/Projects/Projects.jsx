import './Projects.scss'

import ProjectCard from '../ProjectCard/ProjectCard.jsx'

const projectList = [
  {
    imgSrc: "./src/assets/images/projects/apex-challenge-tracker-thumb.webp",
    imgDesc: "Thumbnail mostrando o aplicativo Apex Challenge Tracker.",
    projectTitle: "Apex Legends Challenge Tracker",
    projectDesc: "Aplicativo para otimização de challenges do game Apex Legends, o usuário registra suas challenges e um cálculo otimizatório é feito para mostrar o melhor caminho para que ele complete suas challenges e poupe tempo.",
    projectUrl: "https://pudones.github.io/apex-legends-challenge-tracker/",
    projectRepositoryUrl: "https://github.com/Pudones/apex-legends-challenge-tracker",
    projectAltOrder: "yes"
  },

  {
    imgSrc: "./src/assets/images/projects/space-tourism-thumb.webp",
    imgDesc: "Thumbnail mostrando o Projeto Space Tourism Website.",
    projectTitle: "Space Tourism Website",
    projectDesc: "Website responsivo multi-páginas que mostra um programa de turismo espacial e suas features, como destino, tripulação e metodologias.",
    projectUrl: "https://pudones.github.io/space-tourism-website/",
    projectRepositoryUrl: "https://github.com/Pudones/space-tourism-website/"
  },

  {
    imgSrc: "./src/assets/images/projects/gdc-consulting-thumb.webp",
    imgDesc: "Thumbnail mostrando uma réplica da Landing Page da Empresa GDC Consulting.",
    projectTitle: "GDC Consulting Landing Page",
    projectDesc: "Réplica responsiva da Landing Page da empresa GDC Consulting.",
    projectUrl: "https://pudones.github.io/lp-gdc-consulting/",
    projectRepositoryUrl: "https://github.com/Pudones/lp-gdc-consulting/",
    projectAltOrder: "yes"
  },

  {
    imgSrc: "./src/assets/images/projects/to-do-list-thumb.webp",
    imgDesc: "Thumbnail mostrando o APP To Do List.",
    projectTitle: "To Do List App",
    projectDesc: "Um aplicativo de lista de tarefas responsivo e que guarda suas tarefas mesmo após fechá-lo. Feito para praticar utilização e manipulação de NodeList, HTMLCollection, localStorage e outros aspectos do JavaScript.",
    projectUrl: "https://pudones.github.io/to-do-List/",
    projectRepositoryUrl: "https://github.com/Pudones/to-do-List/"
  },

  {
    imgSrc: "./src/assets/images/projects/photo-gallery-thumb.webp",
    imgDesc: "Thumbnail mostrando a Photo Gallery.",
    projectTitle: "Photo Gallery",
    projectDesc: `Site simples, feito com o intuito de ser uma espécie de "galeria de imagens", onde o usuário é redirecionado para mais imagens da categoria desejada. Feito principalmente para praticar Flexbox, Media Queries e outros efeitos visuais de CSS.`,
    projectUrl: "https://pudones.github.io/Photo-Gallery-with-Cards/",
    projectRepositoryUrl: "https://github.com/Pudones/Photo-Gallery-with-Cards/",
    projectAltOrder: "yes"
  }
]

function Projects() {
  return (
    <section id="projects" className="section-projects">

      <h2 className="section-projects-title">Conheça alguns dos meus projetos:</h2>

      {
        projectList.map(project => {
          return (
            <ProjectCard {...project} />
          );
        })
      }

    </section>
  );
}

export default Projects