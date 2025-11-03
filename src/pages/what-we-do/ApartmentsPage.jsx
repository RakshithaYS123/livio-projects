import React from "react";
import { ContentPage } from "../../components";
import { PAGE_CONTENT } from "../../data/pageContent";

const ApartmentsPage = () => {
  const content = PAGE_CONTENT["/what-we-do/residential/apartments"];
  return <ContentPage {...content} />;
};

export default ApartmentsPage;