import Image from "next/image";
import React from "react";

const Sidebarnav: React.FC = () => {
  return (
    <div className="relative">
      <div>
        <div className="p-3 border-b border-r border-gray w-[4%] bg-custom-bg h-[50px]">
          <div className="hover:bg-black hover:rounded-lg p-2 transition rounded-lg">
            <Image
              src="/images/feather.svg"
              alt="feather"
              width={20}
              height={30}
              className="hover:filter hover:invert"
            />
          </div>
        </div>

        <div className="p-3 pt-5 border-r border-gray w-[4%] h-[65vh] flex flex-wrap flex-col gap-8 bg-custom-bg align-center">
          {[
            "home",
            "shopping-cart",
            "shopping-bag",
            "bx-package (1)",
            "user",
            "bx-group",
          ].map((icon, index) => (
            <div
              key={index}
              className="hover:bg-black hover:rounded-lg p-1 transition flex justify-center"
            >
              <Image
                src={`/images/${icon}.svg`}
                alt={icon}
                width={20}
                height={30}
                className="hover:filter hover:invert"
              />
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-r border-gray w-[4%] h-[83vh] flex flex-wrap flex-col gap-8 bg-custom-bg">
          {["bx-bar-chart (2)", "bx-cog (1)"].map((icon, index) => (
            <div
              key={index}
              className="hover:bg-black hover:rounded-lg p-1 transition"
            >
              <Image
                src={`/images/${icon}.svg`}
                alt={icon}
                width={20}
                height={30}
                className="hover:filter hover:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebarnav;
