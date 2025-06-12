import React, { Component } from "react";
import { Nav, Logo, NavLinks, NavLink } from "./styledComponent";

class Header extends Component {
  render() {
    return (
      <Nav>
        <Logo>Alex Johnson</Logo>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </Nav>
    );
  }
}

export default Header;
