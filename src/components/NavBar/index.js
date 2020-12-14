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
import { animateScroll as scroll } from "react-scroll";

function NavBar({ toggle }) {
  const [scrollView, setScrollView] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollView(true);
    else setScrollView(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollView}>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          razbotics
        </NavLogo>
        <NavIcon onClick={toggle}>
          <FaBars />
        </NavIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="about"
              activeClass="active"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="projects"
              activeClass="active"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="services"
              activeClass="active"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Services
            </NavLink>
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
