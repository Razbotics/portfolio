import React from "react";
import {
  FooterContainer,
  LogoContainer,
  LogoWrapper,
  Icon,
  FooterText,
} from "./FooterComponents";

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoWrapper href="https://github.com/Razbotics">
          <Icon src="/images/github.svg" alt="GitHub" />
        </LogoWrapper>
        <LogoWrapper href="https://in.linkedin.com/in/razbotics">
          <Icon src="/images/linkdin.svg" alt="Linkdin" />
        </LogoWrapper>
        <LogoWrapper href="https://www.instagram.com/razbotics">
          <Icon src="/images/instagram.svg" alt="Instagram" />
        </LogoWrapper>
      </LogoContainer>
      <FooterText>razbotics &#169; 2020 all rights reserved</FooterText>
    </FooterContainer>
  );
}

export default Footer;
