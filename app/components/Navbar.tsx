// components/Navbar/index.tsx
"use client"
import React, { useState } from 'react';
import Logo from './Logo';
import MenuButton from './MenuButton';
import MenuLinks from './MenuLinks';

interface NavbarProps {
  refs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ refs }) => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  const scrollToSection = (sectionId: string) => {
    refs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsNavbarOpened(false);
  };

  const toggleNavbar = () => setIsNavbarOpened(!isNavbarOpened);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80">
      <div className="flex flex-wrap items-center justify-between container mx-auto px-8 py-2 text-white">
        <Logo />
        <div className="block md:hidden mobile-menu">
          <MenuButton isNavbarOpened={isNavbarOpened} toggleNavbar={toggleNavbar} />
        </div>
        <div className={`menu ${isNavbarOpened ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
          <MenuLinks scrollToSection={scrollToSection} isMobile={isNavbarOpened} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
