"use client";

import Image from "next/image";
import React, { useState } from "react";

const TopSideBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftMenuItems = [
    {
      icon: "/images/shopping-cart.svg",
      text: "Purchase",
      type: "button",
      className: "bg-custom-bg",
    },
    {
      icon: "/images/corner-up-right.svg",
      text: "Avenoirs",
      type: "button",
    },
    {
      icon: "/images/sliders.svg",
      text: "Purchase Preference",
      type: "select",
      options: ["Purchase Preference"],
    },
  ];

  const rightMenuItems = [
    {
      icon: "/images/bell.svg",
      type: "icon",
      className: "bg-gray-100",
    },
    {
      type: "select",
      options: ["EN"],
      className: "border bg-white w-[45px]",
    },
    {
      icon: "/images/sun.svg",
      type: "icon",
      className: "border bg-gray-100",
    },
    {
      icon: "/images/bxs-cricket-ball.svg",
      type: "icon",
      className: "border bg-gray-100",
    },
  ];

  return (
    <div className="relative border-b w-full h-[50px] z-30 bg-white">
      <div className="flex justify-between items-center px-4 h-full">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Image src="/images/menu.svg" alt="Menu" width={20} height={20} />
            </button>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-4">
            {leftMenuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                  item.className || ""
                }`}
              >
                <Image src={item.icon} alt={item.text} width={18} height={15} />
                {item.type === "select" ? (
                  <select className="text-sm font-semibold bg-transparent border-none focus:outline-none cursor-pointer">
                    {item.options?.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <p className="text-sm font-semibold whitespace-nowrap">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {rightMenuItems.map((item, index) => (
            <div
              key={index}
              className={`
                ${item.type === "select" ? "hidden sm:flex" : "flex"}
                ${item.type === "icon" && index > 1 ? "hidden sm:flex" : ""}
                items-center justify-center p-2 rounded-lg w-[40px]
                hover:bg-gray-200 transition-colors
                ${item.className || ""}
              `}
            >
              {item.type === "select" ? (
                <select className="text-xs bg-transparent border-none focus:outline-none cursor-pointer">
                  {item.options?.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <Image src={item.icon!} alt="Icon" width={18} height={15} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-[50px] left-0 w-full bg-white border-b shadow-lg z-40 animate-slideDown">
            {leftMenuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-4 hover:bg-gray-100 transition-colors ${
                  item.className || ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image src={item.icon} alt={item.text} width={18} height={15} />
                {item.type === "select" ? (
                  <select className="text-sm font-semibold bg-transparent border-none focus:outline-none w-full">
                    {item.options?.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <p className="text-sm font-semibold">{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSideBar;
