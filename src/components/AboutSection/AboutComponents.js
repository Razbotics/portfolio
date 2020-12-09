import styled from "styled-components";
import colors from "../../constants/colors";

export const AboutContainer = styled.div`
  background: ${colors.black};
  display: flex;
  justify-content: center;

  padding: 0px 30px;
  height: 1300px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.95) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: ${colors.darkgray};
`;

export const AboutContent = styled.div`
  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  z-index: 3;
  position: absolute;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  max-width: 1000px;
  height: 1100px;
  border-radius: 30px;
  animation: 1.5s ease-in-out 0s 1 slideDown;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    margin-top: 0px;
    border-radius: 0px;
  }
`;

export const HeaderContainer = styled.div`
  width: 300px;
  height: 80px;
  padding: 10px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const Header = styled.h1`
  color: ${({ darkText }) => (darkText ? colors.black : colors.white)};
  font-size: 44px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ProfileContainer = styled.div`
  padding: 10px;
  margin-top: 50px;
  max-width: 800px;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    max-width: 500px;
    grid-template-areas: ${`'col1' 'col2'`};
  }
`;

export const ImageWrap = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
  grid-area: "col1";
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameContainer = styled.div`
  grid-area: "col2";
  @media screen and (max-width: 768px) {
    width: 300px;
    margin-top: 30px;
  }
`;

export const ProfileName = styled.h1`
  color: ${colors.white};
  font-size: 44px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InfoTags = styled.div`
  width: 200px;
  height: 70px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 15px;
  margin-bottom: 40px;
  color: ${colors.white};
  font-size: 25px;
  text-align: center;
  background-color: ${colors.primary};
  transition: 0.5s ease-in-out;
  cursor: pointer;

  :hover {
    width: 300px;
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;
