import {
  CloseBtn,
  CloseIcon,
  Title,
  InfoModalContainer,
  HeaderContainer,
  TitleContainer,
} from "./InfoComponents";

function Hobbies({ hidden, onClose }) {
  return (
    <InfoModalContainer hide={hidden}>
      <HeaderContainer>
        <TitleContainer>
          <Title darkText={true}>Hobbies</Title>
        </TitleContainer>
        <CloseBtn onClick={onClose}>
          <CloseIcon />
        </CloseBtn>
      </HeaderContainer>
    </InfoModalContainer>
  );
}

export default Hobbies;
