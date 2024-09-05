import React, { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkGroups = [
    {
      title: "About Us",
      links: [
        { title: "Corporate Information", href: "#" },
        { title: "Investor Relations", href: "#" },
        { title: "Jobs", href: "#" },
        { title: "Media Center", href: "#" },
      ],
    },
    {
      title: "Get Help",
      links: [
        { title: "FAQ", href: "#" },
        { title: "Help Center", href: "#" },
        { title: "Contact Us", href: "#" },
        { title: "Speed Test", href: "#" },
      ],
    },
    {
      title: "Content & Devices",
      links: [
        { title: "Ways to Watch", href: "#" },
        { title: "Only on OTT India", href: "#" },
        { title: "Account", href: "#" },
        { title: "Buy Gift Cards", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy", href: "#" },
        { title: "Terms of Use", href: "#" },
        { title: "Cookie Preferences", href: "#" },
        { title: "Legal Notices", href: "#" },
      ],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 px-7 sm:px-8 md:px-16 py-16 text-zinc-300">
      <div className="max-w-7xl mx-auto">
        <p className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
          Questions? Call 1-844-505-2993
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {linkGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-orange-400">
                {group.title}
              </h3>
              {group.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="hover:text-orange-400 transition-colors duration-300 relative"
                  onMouseEnter={() =>
                    setHoveredLink(`${groupIndex}-${linkIndex}`)
                  }
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.title}
                  {hoveredLink === `${groupIndex}-${linkIndex}` && (
                    <i className="ri-arrow-right-up-line absolute -left-6 top-1 text-orange-400 animate-pulse"></i>
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button className="w-full sm:w-auto border border-zinc-600 text-zinc-300 flex items-center justify-center gap-2 text-xl px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors duration-300">
            <i className="ri-earth-line"></i>
            <span>English</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
          <div className="flex gap-6 text-3xl">
            <i className="ri-facebook-box-fill cursor-pointer hover:text-blue-400 transition-colors duration-300"></i>
            <i className="ri-twitter-fill cursor-pointer hover:text-blue-400 transition-colors duration-300"></i>
            <i className="ri-instagram-fill cursor-pointer hover:text-pink-400 transition-colors duration-300"></i>
          </div>
        </div>

        <p className="mt-12 text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
          OTT India
        </p>
      </div>
    </div>
  );
};

export default Footer;
