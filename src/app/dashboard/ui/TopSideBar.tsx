import Image from "next/image";
import React from "react";

const TopSideBar: React.FC = () => {
  return (
    <div className="border-b w-full h-[50px] z-2">
      <div className="flex justify-between align-center justify-center">
        <div className="pl-8 pt-2 flex gap-16">
          <div className="flex gap-2 p-2 rounded-lg bg-custom-bg  w-[20%] align-center justify-center ">
            <Image
              src="/images/shopping-cart.svg"
              alt="feather"
              width={18}
              height={15}
            />

            <p className="text-sm">Purchase</p>
          </div>

          <div className="flex gap-2 p-2 rounded-lg  w-[10%] align-center justify-center ">
            <Image
              src="/images/corner-up-right.svg"
              alt="feather"
              width={18}
              height={15}
            />

            <p className="text-sm">Avenoirs</p>
          </div>

          <div className="flex gap-2 p-2 rounded-lg  - w-[10%] align-center justify-center ml-[30px]">
            <Image
              src="/images/sliders.svg"
              alt="feather"
              width={18}
              height={15}
            />

            <select className="text-sm">
              <option>Purchase Preference</option>
            </select>
          </div>
        </div>

        <div className="pr-8 pt-2 flex gap-2">
          <div className="flex gap-2 p-2 rounded-lg  w-[40px] align-center justify-center ">
            <Image
              src="/images/bell.svg"
              alt="feather"
              width={18}
              height={15}
            />
          </div>

          <div className="flex p-1 rounded-lg border  w-[45px] ">
            <select className="text-xs">
              <option>EN</option>
            </select>
          </div>

          <div className="flex p-1 rounded-lg border  w-[40px] align-center justify-center">
            <Image src="/images/sun.svg" alt="feather" width={18} height={15} />
          </div>

          <div className="flex p-1 rounded-lg border  w-[40px] align-center justify-center">
            <Image
              src="/images/bxs-cricket-ball.svg"
              alt="feather"
              width={18}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSideBar;
