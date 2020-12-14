import React, { useState } from "react";
import { Button } from "../ButtonComponent";
import { heroContents } from "../../constants/display";
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
        <VideoBg
          autoPlay
          loop
          muted
          src={heroContents.video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroHeader>{heroContents.headline}</HeroHeader>
        <HeroParagraph>{heroContents.subtitle}</HeroParagraph>
        <HeroBtnContainer>
          <Button
            to="services"
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {heroContents.btnLabel} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
