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
      <Content>
        <Paragraph>
          I studied Mechanical Engineering from University of Mumbai affiliated
          college Fr. C. Rodrigues Institute of Technology, Vashi from year 2015
          - 2019.
        </Paragraph>
      </Content>
    </InfoModalContainer>
  );
}

export default Education;
