"use client";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface MenuButtonProps {
  isNavbarOpened: boolean;
  toggleNavbar: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  isNavbarOpened,
  toggleNavbar,
}) => (
  <button
    onClick={toggleNavbar}
    className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
  >
    {isNavbarOpened ? (
      <XMarkIcon className="w-5 h-5" />
    ) : (
      <Bars3Icon className="w-5 h-5" />
    )}
  </button>
);

export default MenuButton;
