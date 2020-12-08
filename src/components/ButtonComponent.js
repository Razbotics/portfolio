import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import colors from "../constants/colors";

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? colors.primary : colors.black)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? colors.black : colors.white)};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? colors.lightgray : colors.primary};
    color: ${colors.black};
  }
`;

export const ButtonRouter = styled(LinkRoute)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? colors.primary : colors.black)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? colors.black : colors.white)};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? colors.lightgray : colors.primary};
    color: ${colors.black};
  }
`;
