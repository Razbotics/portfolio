import {
  CloseBtn,
  CloseIcon,
  Title,
  InfoModalContainer,
  HeaderContainer,
  TitleContainer,
  Paragraph,
  Content,
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
      <Content>
        <Paragraph>
          My hobbies are travelling, photography and ofcourse gaining new
          skills!
        </Paragraph>
      </Content>
    </InfoModalContainer>
  );
}

export default Hobbies;
