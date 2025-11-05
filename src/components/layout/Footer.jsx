import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = ({ onNavigate }) => {
  const whoWeAreLinks = [
    { title: "Philosophy", path: "/who-we-are/philosophy" },
    { title: "Leadership", path: "/who-we-are/leadership" },
    { title: "About Our Founder", path: "/who-we-are/about-founder" },
    { title: "Chairman's Message", path: "/who-we-are/chairman-message" },
    { title: "Board Of Directors", path: "/who-we-are/board-of-directors" },
    { title: "Leadership Team", path: "/who-we-are/leadership-team" },
  ];

  const whatWeDoLinks = [
    { title: "Apartments", path: "/what-we-do/residential/apartments" },
    { title: "Villas", path: "/what-we-do/residential/villas" },
    { title: "Villaments", path: "/what-we-do/residential/villaments" },
    { title: "Penthouses", path: "/what-we-do/residential/penthouses" },
    { title: "Commercial", path: "/what-we-do/commercial" },
    { title: "Contracting", path: "/what-we-do/contracting" },
  ];

  const quickLinks = [
    { title: "Sustainability", path: "/sustainability" },
    { title: "Media Centre", path: "/media-centre" },
    { title: "Careers", path: "/careers" },
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const policies = [
    { title: "Terms of Use", path: "/terms" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Disclaimer", path: "/disclaimer" },
    { title: "RERA Disclaimer", path: "/rera-disclaimer" },
    { title: "Sitemap", path: "/sitemap" },
  ];

  return (
    <>
      <footer className="bg-black text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Logo */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-light tracking-[0.3em] mb-8">LIVIO</h2>
          </div>

          {/* Four Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Who We Are Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Who We Are</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                {whoWeAreLinks.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-amber-500 cursor-pointer transition-colors"
                  >
                    {link.title}
                  </div>
                ))}
              </div>
            </div>

            {/* What We Do Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">What We Do</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                {whatWeDoLinks.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-amber-500 cursor-pointer transition-colors"
                  >
                    {link.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                {quickLinks.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-amber-500 cursor-pointer transition-colors"
                  >
                    {link.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Policies Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Policies</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                {policies.map((policy, index) => (
                  <div
                    key={index}
                    onClick={() => onNavigate(policy.path)}
                    className="hover:text-amber-500 cursor-pointer transition-colors"
                  >
                    {policy.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Contact Info */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Phone size={18} />
              <a
                href="tel:08046464500"
                className="text-lg hover:text-amber-500 transition-colors"
              >
                91108 44903
              </a>
            </div>
            <p className="text-sm text-gray-400">
              CIN Details: LIVIO LIMITED L45201KA1995PLC018475
            </p>
          </div>

          {/* Social Media Icons — FIXED: use buttons instead of <a href="#"> */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              type="button"
              onClick={() => window.open("https://facebook.com/yourpage", "_blank")}
              className="hover:text-amber-500 transition-colors focus:outline-none"
              aria-label="Visit us on Facebook"
            >
              <Facebook size={24} />
            </button>
            <button
              type="button"
              onClick={() => window.open("https://youtube.com/yourchannel", "_blank")}
              className="hover:text-amber-500 transition-colors focus:outline-none"
              aria-label="Visit us on YouTube"
            >
              <Youtube size={24} />
            </button>
            <button
              type="button"
              onClick={() => window.open("https://twitter.com/yourhandle", "_blank")}
              className="hover:text-amber-500 transition-colors focus:outline-none"
              aria-label="Visit us on Twitter"
            >
              <Twitter size={24} />
            </button>
            <button
              type="button"
              onClick={() => window.open("https://instagram.com/yourprofile", "_blank")}
              className="hover:text-amber-500 transition-colors focus:outline-none"
              aria-label="Visit us on Instagram"
            >
              <Instagram size={24} />
            </button>
            <button
              type="button"
              onClick={() => window.open("https://linkedin.com/company/yourcompany", "_blank")}
              className="hover:text-amber-500 transition-colors focus:outline-none"
              aria-label="Visit us on LinkedIn"
            >
              <Linkedin size={24} />
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>LIVIO Limited © Copyright 2025 All rights reserved</p>
          </div>
        </div>
      </footer>

      {/* Mobile Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#121212] text-gray-300 flex divide-x divide-gray-700 z-30 md:hidden">
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 py-4 hover:bg-gray-800 transition-colors focus:outline-none"
        >
          <Phone size={20} />
          <span className="text-xs sm:text-sm">CALL BACK</span>
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 py-4 hover:bg-gray-800 transition-colors focus:outline-none"
        >
          <Phone size={20} />
          <span className="text-xs sm:text-sm">CALL US</span>
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#1a1a1a] text-white font-semibold hover:bg-[#252525] transition-colors border-l-2 border-r-2 border-green-600 focus:outline-none"
        >
          <MessageCircle size={20} />
          <span className="text-xs sm:text-sm">WHATSAPP</span>
        </button>
      </div>
    </>
  );
};

export default Footer;
