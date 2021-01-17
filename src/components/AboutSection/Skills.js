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
      <Content>
        <Paragraph>
          Currently, I have programming skills in both JavaScript and Python.
        </Paragraph>
        <br />
        <Paragraph>Comming to tech skills,</Paragraph>
        <Paragraph>
          For Frontend I have skills in React, React Native and Angular. For
          Backend I have skills in Node.js, MongoDB, Express, Python Flask and
          aiohttp libraries.
        </Paragraph>
        <Paragraph>
          Apart from it, I have worked with DevOps, AWS and cloud computing
        </Paragraph>
      </Content>
    </InfoModalContainer>
  );
}

export default Skills;
