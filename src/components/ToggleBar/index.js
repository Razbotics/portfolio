import React from "react";
import {
  ToggleBarContainer,
  Icon,
  CloseIcon,
  ToggleBarWrapper,
  ToggleBarMenu,
  ToggleBarLink,
  ToggleBtn,
  ToggleBtnLink,
} from "./ToggleBarComponents";

function ToggleBar({ isOpen, toggle }) {
  return (
    <ToggleBarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <ToggleBarWrapper>
        <ToggleBarMenu>
          <ToggleBarLink onClick={toggle} to="projects">
            Projects
          </ToggleBarLink>
          <ToggleBarLink onClick={toggle} to="service">
            Services
          </ToggleBarLink>
          <ToggleBarLink onClick={toggle} to="about">
            About
          </ToggleBarLink>
        </ToggleBarMenu>
        <ToggleBtn>
          <ToggleBtnLink to="/contact">Contact</ToggleBtnLink>
        </ToggleBtn>
      </ToggleBarWrapper>
    </ToggleBarContainer>
  );
}

export default ToggleBar;
