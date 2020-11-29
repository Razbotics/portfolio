import React, { useState } from "react";
import { Button } from "../ButtonComponent";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroHeader,
  HeroParagraph,
  HeroBtnContainer,
  ArrowForward,
  ArrowRight,
} from "./HeroComponents";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src="/videos/video.mp4" type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroHeader>Welcome To Razbotics</HeroHeader>
        <HeroParagraph>
          One stop solution for your web and mobile app development, see
          services now
        </HeroParagraph>
        <HeroBtnContainer>
          <Button
            to="services"
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
