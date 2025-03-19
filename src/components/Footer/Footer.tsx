import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";
import {
  YATIN_BURHMI_GITHUB,
  YATIN_BURHMI_LINKEDIN,
} from "../../utilities/constants";

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a href={YATIN_BURHMI_LINKEDIN} target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href={YATIN_BURHMI_GITHUB} target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}
