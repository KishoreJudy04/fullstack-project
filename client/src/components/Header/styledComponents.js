import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: hsl(215, 25%, 27%);
`;

export const DesktopNav = styled.div`
  display: none;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.button`
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  color: ${(props) =>
    props.$active ? "hsl(217, 91%, 60%)" : "hsl(210, 40%, 60%)"};

  &:hover {
    color: hsl(217, 91%, 60%);
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  color: hsl(210, 40%, 60%);
  transition: color 0.3s ease;

  &:hover {
    color: hsl(217, 91%, 60%);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  position: fixed;
  top: 4rem;
  right: 0;
  width: 16rem;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 40;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;

  @media (min-width: 768px) {
    display: none;
  }

  ${NavLink} {
    text-align: left;
    padding: 0.5rem 0;
  }
`;
