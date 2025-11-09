"use client";
import { AlignLeft } from "lucide-react";
import { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsSideMenuOpen(true)}
        className=""
      >
        <AlignLeft className="hoverEffect hover:text-shop-dark-green hover:cursor-pointer md:hidden  " />
        <p className="sr-only">Mobile</p>
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={() => setIsSideMenuOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
