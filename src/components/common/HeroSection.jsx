import React from "react";

const HeroSection = ({ image = "/images/hero.png" }) => (
  <div className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">

    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>
);

export default HeroSection;
