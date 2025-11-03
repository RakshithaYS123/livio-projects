import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const ContractingPage = () => {
  const content = PAGE_CONTENT["/what-we-do/contracting"];
  return <ContentPage {...content} />;
};

export default ContractingPage;