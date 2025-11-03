import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const VillasPage = () => {
  const content = PAGE_CONTENT["/what-we-do/residential/villas"];
  return <ContentPage {...content} />;
};

export default VillasPage;