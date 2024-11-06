import React from "react";

interface MenuLinksProps {
  scrollToSection: (sectionId: string) => void;
  isMobile: boolean;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ scrollToSection, isMobile }) => (
  <ul
    className={`flex ${
      isMobile ? "flex-col items-center gap-6" : "flex-row gap-6"
    } p-4 md:p-0`}
  >
    <li>
      <button
        onClick={() => scrollToSection("home")}
        className="text-[#ADB7BE] sm:text-xl hover:text-white"
      >
        Home
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection("about")}
        className="text-[#ADB7BE] sm:text-xl hover:text-white"
      >
        About
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection("skills")}
        className="text-[#ADB7BE] sm:text-xl hover:text-white"
      >
        Skills
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection("work")}
        className="text-[#ADB7BE] sm:text-xl hover:text-white"
      >
        Work
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection("contacts")}
        className="text-[#ADB7BE] sm:text-xl hover:text-white"
      >
        Contacts
      </button>
    </li>
  </ul>
);

export default MenuLinks;
