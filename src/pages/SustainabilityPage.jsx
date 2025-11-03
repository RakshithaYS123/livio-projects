import React from "react";
import { ContentPage } from "../components";

const SustainabilityPage = () => (
  <ContentPage
    title="Sustainability"
    sections={[
      {
        heading: "Our Commitment",
        content: "Our commitment to sustainable and eco-friendly practices.",
      },
    ]}
    image="/images/sustainability-hero.jpg"
  />
);

export default SustainabilityPage;