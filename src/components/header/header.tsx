import {
  HeaderWrapper,
  Logo,
  NavLinks,
  MobileMenuIcon,
  MobileMenu,
  HeaderContainer,
} from "./styles";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("🚀 ~ Header ~ isMenuOpen:", isMenuOpen);
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>
          <span>&lt;</span>
          <span>Yatin Burhmi</span>
          <span>/&gt;</span>
        </Logo>

        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </NavLinks>

        {/* Mobile Menu Icon */}
        <MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </MobileMenuIcon>

        {/* Mobile Dropdown Menu */}
        <MobileMenu $isOpen={isMenuOpen}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </MobileMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
