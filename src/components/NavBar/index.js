import React, { useEffect, useState } from "react";
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
  const [scrollView, setScrollView] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollView(true);
    else setScrollView(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollView}>
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
