import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const PenthousesPage = () => {
  const content = PAGE_CONTENT["/what-we-do/residential/penthouses"];
  return <ContentPage {...content} />;
};

export default PenthousesPage;