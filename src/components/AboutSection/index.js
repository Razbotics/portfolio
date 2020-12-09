import React, { useEffect, useState } from "react";
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
  InfoContainer,
  InfoTags,
} from "./AboutComponents";
import Education from "./Education";
import Experience from "./Experience";
import Hobbies from "./Hobbies";
import Skills from "./Skills";

function AboutSection() {
  const [visibleContainer, setVisibleContainer] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <InfoContainer hidden={visibleContainer}>
          {aboutContents.abouts.map((about) => (
            <InfoTags
              key={about.name}
              onClick={() => setVisibleContainer(about.name)}
            >
              {about.name}
            </InfoTags>
          ))}
        </InfoContainer>
        <Experience
          hidden={visibleContainer !== "Experience"}
          onClose={() => setVisibleContainer(null)}
        />
        <Education
          hidden={visibleContainer !== "Education"}
          onClose={() => setVisibleContainer(null)}
        />
        <Skills
          hidden={visibleContainer !== "Skills"}
          onClose={() => setVisibleContainer(null)}
        />
        <Hobbies
          hidden={visibleContainer !== "Hobbies"}
          onClose={() => setVisibleContainer(null)}
        />
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutSection;
