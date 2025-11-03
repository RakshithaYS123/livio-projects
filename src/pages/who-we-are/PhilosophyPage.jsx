import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const PhilosophyPage = () => {
  const content = PAGE_CONTENT["/who-we-are/philosophy"] || {};
  return <ContentPage {...content} />;
};

export default PhilosophyPage;
