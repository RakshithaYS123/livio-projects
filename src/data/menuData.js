export const MENU = [
  {
    title: "WHO WE ARE",
    path: "/who-we-are",
    children: [
      {
        title: "Philosophy",
        path: "/who-we-are/philosophy",
        subsections: ["Crafted with quality", "Vision & Mission", "Livio way"],
      },
      // { title: "Leadership", path: "/who-we-are/leadership" },
      { title: "About Our Founder", path: "/who-we-are/about-founder" },
      { title: "Chairman's Message", path: "/who-we-are/chairman-message" },
      // { title: "Board Of Directors", path: "/who-we-are/board-of-directors" },
      { title: "Leadership Team", path: "/who-we-are/leadership-team" },
    ],
  },
  {
    title: "WHAT WE DO",
    path: "/what-we-do",
    children: [
      // { title: "Residential", isHeading: true },
      { title: "Apartments", path: "/what-we-do/residential/apartments" },
      { title: "Villas", path: "/what-we-do/residential/villas" },
      // { title: "Villaments", path: "/what-we-do/residential/villaments" },
      { title: "Penthouses", path: "/what-we-do/residential/penthouses" },
      { title: "Commercial", path: "/what-we-do/commercial" },
      // { title: "Contracting", path: "/what-we-do/contracting" },
    ],
  },

  // { title: "BLOG", path: "/blog" },

  // { title: "MEDIA CENTRE", path: "/media-centre" },
  { title: "SUSTAINABILITY", path: "/sustainability" },
  { title: "CAREERS", path: "/careers" },
  { title: "CONTACT US", path: "/contact-us" },
];
