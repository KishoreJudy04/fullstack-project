import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: white;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #4b4b8f;
  font-weight: 500;

  &:hover {
    color: #2196f3;
  }
`;
export const Button = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;
