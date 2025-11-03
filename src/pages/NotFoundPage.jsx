import React from "react";
import { PageWrapper } from "../components";

const NotFoundPage = () => (
  <PageWrapper>
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 text-center">
      <h1 className="text-4xl font-light text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600">
        The page you're looking for doesn't exist yet.
      </p>
    </div>
  </PageWrapper>
);

export default NotFoundPage;