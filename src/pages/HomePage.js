import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import NavBar from "../components/NavBar";
import ToggleBar from "../components/ToggleBar";
import { displayContents } from "../constants/display";

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
      <InfoSection {...displayContents.about} />
      <InfoSection {...displayContents.projects} />
    </>
  );
}

export default HomePage;
