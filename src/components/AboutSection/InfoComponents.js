import styled from "styled-components";
import colors from "../../constants/colors";
import { FaTimes } from "react-icons/fa";

export const InfoModalContainer = styled.div`
  position: absolute;
  padding: 10px;
  width: 100%;
  height: 500px;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 0 50px;
  transition: 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    border-radius: 0px;
    top: ${({ hide }) => (hide ? "100%" : `50%`)};
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    border-radius: 0px;
    top: ${({ hide }) => (hide ? "100%" : `45%`)};
    height: 600px;
  }

  top: ${({ hide }) => (hide ? "100%" : `40%`)};
  transform: ${({ hide }) => (hide ? "scale(0)" : "scale(1)")};
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  padding: 10px;
`;

export const Title = styled.h1`
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

export const CloseBtn = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${colors.black};
  font-size: 45px;
`;
