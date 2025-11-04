import React from "react";

const HeroSection = ({ video = "/images/Hero-video.mp4" }) => (
  <div className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
    {/* Background video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={video}
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Dark overlay for better text contrast */}
    <div className="absolute inset-0 bg-black/40" />
  </div>
);

export default HeroSection;
