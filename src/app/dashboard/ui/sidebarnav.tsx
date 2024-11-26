"use client";

import Image from "next/image";
import React, { useState } from "react";

const Sidebarnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topIcon = {
    name: "feather",
    path: "/images/feather.svg",
  };

  const mainIcons = [
    { name: "home", path: "/images/home.svg" },
    { name: "shopping-cart", path: "/images/shopping-cart.svg" },
    { name: "shopping-bag", path: "/images/shopping-bag.svg" },
    { name: "package", path: "/images/bx-package (1).svg" },
    { name: "user", path: "/images/user.svg" },
    { name: "group", path: "/images/bx-group.svg" },
  ];

  const bottomIcons = [
    { name: "chart", path: "/images/bx-bar-chart (2).svg" },
    { name: "settings", path: "/images/bx-cog (1).svg" },
  ];

  const NavIcon = ({ src, alt }: { src: string; alt: string }) => (
    <div className="hover:bg-black hover:rounded-lg p-2 transition duration-200 flex justify-center items-center">
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className="hover:filter hover:invert"
      />
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
      >
        <Image src="/images/menu.svg" alt="menu" width={24} height={24} />
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
        fixed top-0 left-0 h-full z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        lg:relative lg:block
        bg-custom-bg border-r border-gray
        w-16 min-w-[4rem]
      `}
      >
        <div className="p-3 border-b border-gray h-[50px]">
          <NavIcon src={topIcon.path} alt={topIcon.name} />
        </div>

        <div className="p-3 pt-5 h-[65vh] flex flex-col gap-8 items-center">
          {mainIcons.map((icon, index) => (
            <NavIcon key={index} src={icon.path} alt={icon.name} />
          ))}
        </div>

        <div className="p-3 border-t border-gray mt-auto flex flex-col gap-8 items-center">
          {bottomIcons.map((icon, index) => (
            <NavIcon key={index} src={icon.path} alt={icon.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebarnav;
