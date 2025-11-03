import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const CommercialPage = () => {
  const content = PAGE_CONTENT["/what-we-do/commercial"];
  return <ContentPage {...content} />;
};

export default CommercialPage;