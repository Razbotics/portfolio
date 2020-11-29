import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ToggleBar from "../components/ToggleBar";

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
    </>
  );
}

export default HomePage;
