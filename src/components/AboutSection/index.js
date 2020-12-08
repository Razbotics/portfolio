import React from "react";
import { aboutContents } from "../../constants/display";
import {
  AboutBg,
  AboutContainer,
  VideoBg,
  AboutContent,
  HeaderContainer,
  Header,
  ProfileContainer,
  ImageWrap,
  ProfileImage,
  NameContainer,
  ProfileName,
} from "./AboutComponents";

function AboutSection() {
  return (
    <AboutContainer>
      <AboutBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={aboutContents.video}
          type="video/mp4"
        />
      </AboutBg>
      <AboutContent>
        <HeaderContainer>
          <Header>About me</Header>
        </HeaderContainer>

        <ProfileContainer>
          <ImageWrap>
            <ProfileImage src={aboutContents.profileImage} alt="img" />
          </ImageWrap>
          <NameContainer>
            <ProfileName>{aboutContents.header}</ProfileName>
          </NameContainer>
        </ProfileContainer>
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutSection;
