import React from "react";
import {
  CloseBtn,
  CloseIcon,
  Title,
  InfoModalContainer,
  HeaderContainer,
  TitleContainer,
  Content,
  Paragraph,
} from "./InfoComponents";

function Experience({ hidden, onClose }) {
  return (
    <InfoModalContainer hide={hidden}>
      <HeaderContainer>
        <TitleContainer>
          <Title darkText={true}>Experience</Title>
        </TitleContainer>
        <CloseBtn onClick={onClose}>
          <CloseIcon />
        </CloseBtn>
      </HeaderContainer>
      <Content>
        <Paragraph>
          I have 2 years of experience in Software development and 1 year in
          FullStack. Currently, I work as a Software Engineer at FlytBase.
        </Paragraph>
        <br />
        <Paragraph>
          My work here primarily is to develop Full Stack applications. I also
          have experience in implementing DevOps practices as well as Cloud
          Engineering in AWS.
        </Paragraph>
      </Content>
    </InfoModalContainer>
  );
}

export default Experience;
