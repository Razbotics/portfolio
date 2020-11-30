import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import NavBar from "../components/NavBar";
import Service from "../components/Service";
import ToggleBar from "../components/ToggleBar";
import { displayContents, displayService } from "../constants/display";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToggleBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      {displayContents.map((content) => (
        <InfoSection key={content.id} {...content} />
      ))}
      <Service contents={displayService} />
    </>
  );
}

export default HomePage;
