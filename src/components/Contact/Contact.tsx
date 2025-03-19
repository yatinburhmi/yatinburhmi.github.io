import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import { contactSection, YATIN_EMAIL_ID } from "../../utilities/constants";

export function Contact() {
  return (
    contactSection.display && (
      <Container id="contact">
        <header>
          <h2>Contact</h2>
          <p>Ready to get started on your project? </p>
        </header>
        <div className="contacts">
          <div>
            <a href={`mailto:${YATIN_EMAIL_ID}`}>
              <img src={emailIcon} alt="Email" />
            </a>
            <a href={`mailto:${YATIN_EMAIL_ID}`}>{YATIN_EMAIL_ID}</a>
          </div>
        </div>
      </Container>
    )
  );
}
