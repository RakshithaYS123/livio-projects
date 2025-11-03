import React from "react";
import { ContentPage } from "../components";

const BlogPage = () => (
  <ContentPage
    title="Blog"
    sections={[
      {
        heading: "Our Latest Insights",
        content: "Stay updated with our latest news and insights.",
      },
    ]}
    image="/images/blog-hero.jpg"
  />
);

export default BlogPage;