import React from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarComponents";
import { FaBars } from "react-icons/fa";

function NavBar({ toggle }) {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">razbotics</NavLogo>
        <NavIcon onClick={toggle}>
          <FaBars />
        </NavIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services">Services</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact">Contact</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;
