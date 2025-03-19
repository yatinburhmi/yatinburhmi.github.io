import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { projects, projectSection } from "../../utilities/constants";
import { IProjectType } from "../../utilities/constants";

export function Project() {
  return (
    projectSection.display && (
      <Container id="project">
        <h2>My Projects</h2>
        <div className="projects">
          {projects.map((project: IProjectType) => (
            <ScrollAnimation animateIn="fadeInUp" key={project.id.toString()}>
              <div className="project">
                <header>
                  <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E76F51"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="Visit site" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <img src={externalLink} alt="Visit site" />
                      </a>
                    )}
                  </div>
                </header>
                <div className="body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    {project.tech.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </Container>
    )
  );
}
