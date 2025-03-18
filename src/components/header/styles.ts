import styled from "styled-components";

interface MobileMenuProps {
  $isOpen: boolean; // Use "$" prefix to prevent passing it to the DOM
}

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Center everything */
`;

// Wrapper for the entire header
export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Logo styling
export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

// Navigation links container
export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap; /* Ensures responsiveness */
  gap: 20px;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    transition: 0.3s;
    white-space: nowrap; /* Prevents wrapping */
    
    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

// Mobile menu (Hamburger)
export const MobileMenuIcon = styled.div`
  display: none;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // Show on mobile
  }
`;

// Mobile Dropdown Menu
export const MobileMenu = styled.div<MobileMenuProps>`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  padding: 20px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black; /* Ensure links are visible */
    font-size: 18px;
    transition: 0.3s;
  }
`;

