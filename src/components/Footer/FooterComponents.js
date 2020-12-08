import styled from "styled-components";
import colors from "../../constants/colors";

export const FooterContainer = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const LogoWrapper = styled.a`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

export const FooterText = styled.p`
  margin-top: 50px;
  color: ${colors.black};
  font-size: 20px;
  text-align: center;
  max-width: 500px;
`;
