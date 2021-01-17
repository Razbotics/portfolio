import styled from "styled-components";
import colors from "../../constants/colors";

export const HeaderContainer = styled.div`
  display: flex;
  background: ${colors.black};
  width: 100%;
  padding: 10px;
  justify-content: center;
  padding-top: 50px;
`;

export const Header = styled.h1`
  color: ${colors.white};
  font-size: 45px;
`;

export const ProjectContainer = styled.div`
  color: ${colors.white};
  background: ${({ lightBg }) => (lightBg ? colors.white : colors.black)};

  @media screen and (max-width: 760px) {
    padding: 100px 0;
  }
`;

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 90vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContentRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-top: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 760px) {
    margin-top: 0px;
  }
`;

export const Column2 = styled.div`
  margin-top: 15px;
  padding: 0 5px;
  grid-area: col2;

  @media screen and (max-width: 760px) {
    margin-top: 0px;
    padding: 0px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${colors.primary};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? colors.white : colors.black)};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 30px;
  color: ${({ lightText }) => (lightText ? colors.white : colors.black)};
`;

export const VideoWrap = styled.div`
  max-width: 600px;
  height: 100%;
`;

export const Video = styled.video`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
