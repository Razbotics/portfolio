import {
  CloseBtn,
  CloseIcon,
  Title,
  InfoModalContainer,
  HeaderContainer,
  TitleContainer,
} from "./InfoComponents";

function Skills({ hidden, onClose }) {
  return (
    <InfoModalContainer hide={hidden}>
      <HeaderContainer>
        <TitleContainer>
          <Title darkText={true}>Skills</Title>
        </TitleContainer>
        <CloseBtn onClick={onClose}>
          <CloseIcon />
        </CloseBtn>
      </HeaderContainer>
    </InfoModalContainer>
  );
}

export default Skills;
