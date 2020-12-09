import React from "react";
import {
  CloseBtn,
  CloseIcon,
  Title,
  InfoModalContainer,
  HeaderContainer,
  TitleContainer,
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
    </InfoModalContainer>
  );
}

export default Experience;
