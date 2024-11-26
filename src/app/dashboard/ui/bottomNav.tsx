import Image from "next/image";
import React from "react";

const BottomNav: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-custom-bg">
      {/* Left Section */}
      <div className="flex flex-wrap gap-4 md:gap-16 items-center">
        {/* Purchase */}
        <div className="flex items-center gap-2 p-2 rounded-lg bg-custom-bg w-auto md:w-[20%]">
          <Image
            src="/images/shopping-cart.svg"
            alt="Shopping Cart"
            width={18}
            height={15}
          />
          <p className="text-sm font-semibold">Purchase</p>
        </div>

        {/* Avenoirs */}
        <div className="flex items-center gap-2 p-2 rounded-lg w-auto md:w-[10%]">
          <Image
            src="/images/corner-up-right.svg"
            alt="Corner Up Right"
            width={18}
            height={15}
          />
          <p className="text-sm font-semibold">Avenoirs</p>
        </div>

        {/* Purchase Preference */}
        <div className="flex items-center gap-2 p-2 rounded-lg w-auto md:w-[10%]">
          <Image
            src="/images/sliders.svg"
            alt="Sliders"
            width={18}
            height={15}
          />
          <select className="text-sm font-semibold border-none bg-transparent">
            <option>Purchase Preference</option>
          </select>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap gap-4 items-center mt-4 md:mt-0">
        {/* Bell Icon */}
        <div className="flex items-center justify-center gap-2 p-2 rounded-lg w-10 bg-gray-200">
          <Image src="/images/bell.svg" alt="Bell" width={18} height={15} />
        </div>

        {/* Language Selector */}
        <div className="flex items-center justify-center gap-2 p-1 rounded-lg border w-12 bg-white">
          <select className="text-xs font-semibold border-none bg-transparent">
            <option>EN</option>
          </select>
        </div>

        {/* Sun Icon */}
        <div className="flex items-center justify-center p-2 rounded-lg border w-10 bg-gray-200">
          <Image src="/images/sun.svg" alt="Sun" width={18} height={15} />
        </div>

        {/* Cricket Ball Icon */}
        <div className="flex items-center justify-center p-2 rounded-lg border w-10 bg-gray-200">
          <Image
            src="/images/bxs-cricket-ball.svg"
            alt="Cricket Ball"
            width={18}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
