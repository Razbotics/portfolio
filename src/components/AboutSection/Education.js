import {
  CloseBtn,
  CloseIcon,
  Title,
  InfoModalContainer,
  HeaderContainer,
  TitleContainer,
} from "./InfoComponents";

function Education({ hidden, onClose }) {
  return (
    <InfoModalContainer hide={hidden}>
      <HeaderContainer>
        <TitleContainer>
          <Title darkText={true}>Education</Title>
        </TitleContainer>
        <CloseBtn onClick={onClose}>
          <CloseIcon />
        </CloseBtn>
      </HeaderContainer>
    </InfoModalContainer>
  );
}

export default Education;
