import React from "react";
import HeroSection from "./HeroSection";

const PageWrapper = ({ children, showHero = false, heroImage = null }) => (
  <div className="min-h-screen bg-gray-50">
    {showHero && <HeroSection image={heroImage} />}
    <div className="pb-0">{children}</div>
  </div>
);

export default PageWrapper;