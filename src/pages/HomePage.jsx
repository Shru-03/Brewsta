import React from "react";
import HeroSection from "../components/HeroSection";

import GridSection from "../components/GridSection";
import InfiniteScroller from "../components/InfiniteScroller";
import VideoComponent from "../components/VideoComponent";
import FallingBeans from "../components/FallingBean";
import AboutSection from "../components/AboutSection";
import CoffeeScroller from "../components/CoffeeScroller";

const HomePage = ({ aboutRef }) => {
  return (
    <div className="relative z-10 mt-10">
      <FallingBeans />
      <HeroSection />
      <InfiniteScroller />
      <GridSection />

      <VideoComponent />
      <CoffeeScroller />
      <AboutSection ref={aboutRef} />
    </div>
  );
};

export default HomePage;
