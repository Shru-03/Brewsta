import React from "react";
import HeroSection from "../components/HeroSection";

import GridSection from "../components/GridSection";
import InfiniteScroller from "../components/InfiniteScroller";
import VideoComponent from "../components/VideoComponent";
import FallingBeans from "../components/FallingBean";

const HomePage = () => {
  return (
    <div className="relative z-10 mt-10">
      <FallingBeans />
      <HeroSection />
      <InfiniteScroller />
      <GridSection />
      <VideoComponent />
    </div>
  );
};

export default HomePage;
