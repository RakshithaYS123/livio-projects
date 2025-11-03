import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Header = ({ onNavigate, currentPath, onMenuClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      label: "WHO WE ARE",
      path: "/who-we-are",
      children: [
        { title: "Philosophy", path: "/who-we-are/philosophy" },
        { title: "Leadership", path: "/who-we-are/leadership" },
        { title: "About Our Founder", path: "/who-we-are/about-founder" },
        { title: "Chairman's Message", path: "/who-we-are/chairman-message" },
        { title: "Board Of Directors", path: "/who-we-are/board-of-directors" },
        { title: "Leadership Team", path: "/who-we-are/leadership-team" },
      ],
    },
    {
      label: "WHAT WE DO",
      path: "/what-we-do",
      children: [
        { title: "Apartments", path: "/what-we-do/residential/apartments" },
        { title: "Villas", path: "/what-we-do/residential/villas" },
        { title: "Villaments", path: "/what-we-do/residential/villaments" },
        { title: "Penthouses", path: "/what-we-do/residential/penthouses" },
        { title: "Commercial", path: "/what-we-do/commercial" },
        { title: "Contracting", path: "/what-we-do/contracting" },
      ],
    },
    { label: "SUSTAINABILITY", path: "/sustainability" },
    { label: "MEDIA CENTRE", path: "/media-centre" },
    { label: "CAREERS", path: "/careers" },
    { label: "BLOG", path: "/blog" },
    { label: "CONTACT US", path: "/contact-us" },
  ];

  const handleMouseEnter = (index) => {
    if (menuItems[index].children) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm text-gray-700 z-50 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Livio Logo"
          onClick={() => onNavigate("/")}
          className="h-10 cursor-pointer"
        />

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => !item.children && onNavigate(item.path)}
                className={`flex items-center gap-1 text-sm tracking-wide transition-colors hover:text-amber-700 py-2 ${
                  currentPath === item.path ? "text-amber-700 font-medium" : ""
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={16} />}
              </button>

              {/* Dropdown Menu */}
              {item.children && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100">
                  {item.children.map((child, childIndex) => (
                    <button
                      key={childIndex}
                      onClick={() => {
                        onNavigate(child.path);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    >
                      {child.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
