import React from "react";
import { routes } from "./routeConfig";
import { NotFoundPage } from "../pages";

const AppRoutes = ({ currentPath }) => {
  const PageComponent = routes[currentPath] || NotFoundPage;
  return <PageComponent />;
};

export default AppRoutes;