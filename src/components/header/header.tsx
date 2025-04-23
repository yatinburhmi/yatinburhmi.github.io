import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import {
  contactSection,
  experienceSection,
  greeting,
  projectSection,
  resumeSection,
} from "../../utilities/constants";
import Resume from "../../assets/Yatin_Burhmi_Resume.pdf";
import { Container } from "./styles";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleTheme() {
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }
  const experienceDisplay = experienceSection.display;
  const projectDisplay = projectSection.display;
  const contactDisplay = contactSection.display;
  const resumeDisplay = resumeSection.display;
  return (
    <Container className="header-fixed">
      <Router>
        <a href="#home" className="logo-name">
          <span>{greeting.username}</span>
        </a>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isMenuOpen ? "active" : ""}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          {experienceDisplay && (
            <a href="#experience" onClick={closeMenu}>
              {experienceSection.title}
            </a>
          )}
          {/* <a href="#about" onClick={closeMenu}>
            About me
          </a> */}
          {projectDisplay && (
            <a href="#project" onClick={closeMenu}>
              {projectSection.title}
            </a>
          )}
          {contactDisplay && (
            <a href="#contact" onClick={closeMenu}>
              {contactSection.title}
            </a>
          )}
          {resumeDisplay && (
            <a href={Resume} download className="button">
              {resumeSection.title}
            </a>
          )}
        </nav>
        <div
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className={isMenuOpen ? "menu active" : "menu"}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        ></div>
      </Router>
    </Container>
  );
}
