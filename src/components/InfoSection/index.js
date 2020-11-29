import React from "react";
import { Button } from "../ButtonComponent";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoComponents";

function InfoSection({
  id,
  lightBg,
  primaryTopline,
  lightHeadline,
  lightDesc,
  topline,
  headline,
  description,
  buttonLabel,
  primaryButton,
  darkBtnText,
  route,
  imgStart,
  img,
  alt,
}) {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine primary={primaryTopline}>{topline}</TopLine>
              <Heading lightText={lightHeadline}>{headline}</Heading>
              <Subtitle lightText={lightDesc}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to={route}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  primary={primaryButton}
                  dark={darkBtnText}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}

export default InfoSection;
