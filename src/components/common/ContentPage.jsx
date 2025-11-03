// src/components/ContentPage.jsx
import React from "react";

const ContentPage = ({ title, subtitle, content, sections }) => {
  // Handle case when props are undefined
  if (!title) {
    return (
      <div className="content-page">
        <div className="error-message">
          <h1>Content Not Available</h1>
          <p>The requested page content is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-page">
      <div className="content-header">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
      
      <div className="content-body">
        {content && <p>{content}</p>}
        
        {sections && Array.isArray(sections) && sections.map((section, index) => (
          <div key={index} className="content-section">
            <h3>{section.heading}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;