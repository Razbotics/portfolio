import styled from "styled-components";
import colors from "../../constants/colors";

export const ServiceContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.black};

  @media screen and (max-width: 1000px) {
    height: 1300px;
  }
`;

export const ServiceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCard = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.2);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
  &:not(:hover) {
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1000px) {
    &:hover {
      transform: scale(1);
      cursor: pointer;
    }
    &:not(:hover) {
    }
  }
`;

export const ServiceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServiceHeader = styled.h1`
  font-size: 2.5rem;
  color: ${colors.white};
  margin-top: 20px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServiceCardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ServiceCardSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
`;
