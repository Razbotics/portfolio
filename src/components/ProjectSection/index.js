import React from "react";
import {
  ProjectContainer,
  ProjectWrapper,
  ContentRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  VideoWrap,
  Video,
  HeaderContainer,
  Header,
} from "./ProjectComponents";

export function HeaderComponent({}) {
  return (
    <HeaderContainer>
      <Header>Projects</Header>
    </HeaderContainer>
  );
}

export function ProjectComponent({
  lightBg,
  lightDesc,
  headline,
  description,
  imgStart,
  videoUrl,
}) {
  return (
    <ProjectContainer lightBg={lightBg}>
      <ProjectWrapper>
        <ContentRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{headline}</TopLine>
              <Subtitle lightText={lightDesc}>{description}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <VideoWrap>
              <Video src={videoUrl} autoPlay muted loop />
            </VideoWrap>
          </Column2>
        </ContentRow>
      </ProjectWrapper>
    </ProjectContainer>
  );
}
