import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const LeadershipTeamPage = () => {
  const content = PAGE_CONTENT["/who-we-are/leadership-team"];
  return <ContentPage {...content} />;
};

export default LeadershipTeamPage;