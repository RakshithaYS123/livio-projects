import React from "react";
import { ContentPage } from "../components";

const ContactUsPage = () => (
  <ContentPage
    title="Contact Us"
    sections={[
      {
        heading: "Get in Touch",
        content: "Get in touch with us for inquiries and consultations.",
      },
    ]}
    image="/images/contact-us-hero.jpg"
  />
);

export default ContactUsPage;