import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { motion } from "framer-motion"; // Import Framer Motion
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Hello from "../../assets/Hello.gif";
import {
  greeting,
  YATIN_BURHMI_GITHUB,
  YATIN_BURHMI_LINKEDIN,
} from "../../utilities/constants";
import developer from "../../assets/lottie/developer.json";
import { DisplayLottie } from "../DisplayLottie/displayLottie";

export function Greeting() {
  return (
    <Container id="home">
      <div className="hero-text">
        {/* Hero Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} // Start hidden, slightly lower
          animate={{ opacity: 1, y: 0 }} // Fade in, move up
          transition={{ duration: 1, delay: 0.2 }}
        >
          {greeting.title} <img src={Hello} alt="Hello" width="60px" />,
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {greeting.subTitle}
        </motion.h3>

        {/* Small Resume Animation */}
        <motion.p
          className="small-resume"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        ></motion.p>

        {/* Contact Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <BrowserRouter>
            <a href="#contact" className="button">
              Contact
            </a>
          </BrowserRouter>
        </motion.div>

        {/* Social Media Icons Animation */}
        <motion.div
          className="social-media"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href={YATIN_BURHMI_LINKEDIN} target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href={YATIN_BURHMI_GITHUB} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </motion.div>
      </div>

      {/* Lottie Animation */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }} // Start hidden, slightly to the right
        animate={{ opacity: 1, x: 0 }} // Fade in, move to original position
        transition={{ duration: 1, delay: 0.5 }}
      >
        <DisplayLottie animationData={developer} />
      </motion.div>
    </Container>
  );
}
