import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const LeadershipPage = () => {
  const content = PAGE_CONTENT["/who-we-are/leadership"];
  return <ContentPage {...content} />;
};

export default LeadershipPage;