import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const VillamentsPage = () => {
  const content = PAGE_CONTENT["/what-we-do/residential/villaments"];
  return <ContentPage {...content} />;
};

export default VillamentsPage;