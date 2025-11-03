import React from "react";
import { ContentPage } from "../components";

const MediaCentrePage = () => (
  <ContentPage
    title="Media Centre"
    sections={[
      {
        heading: "Press Resources",
        content: "Access our press releases and media resources.",
      },
    ]}
    image="/images/media-centre-hero.jpg"
  />
);

export default MediaCentrePage;