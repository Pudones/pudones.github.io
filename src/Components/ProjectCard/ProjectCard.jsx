import './ProjectCard.scss'

function ProjectCard({ imgSrc, imgDesc, projectTitle, projectDesc, projectUrl, projectRepositoryUrl, projectAltOrder }) {
  return (
    <div className="project-card">

      <img
        className={projectAltOrder ? "project-thumbnail project-thumbnail--inverted" : "project-thumbnail"}
        src={imgSrc}
        alt={imgDesc}
      />

      <div className="project-text-wrapper">

        <h2 className="project-title">{projectTitle}</h2>

        <p className="project-desc">{projectDesc}</p>

        <div className="project-links-wrapper">
          <a className="project-link" href={projectUrl} target="_blank">ACESSAR PROJETO</a>
          <a className="project-repository" href={projectRepositoryUrl} target="_blank">REPOSITÓRIO</a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard