import Image from "next/image";
import React from "react";

const Sidebarnav: React.FC = () => {
  return (
    <div className="relative">
      <div className="">
        <div className="p-3 border-b border-r border-gray w-[4%] bg-custom-bg h-[50px] ">
          <Image
            src="/images/feather.svg"
            alt="feather"
            width={20}
            height={30}
          />
        </div>

        <div className="p-3 pt-5 border-r border-gray w-[4%] h-[65vh] flex flex-wrap flex-col gap-8 bg-custom-bg">
          <div>
            <Image
              src="/images/home.svg"
              alt="feather"
              width={20}
              height={30}
            />
          </div>

          <div>
            <Image
              src="/images/shopping-cart.svg"
              alt="feather"
              width={20}
              height={30}
            />
          </div>

          <div>
            <Image
              src="/images/shopping-bag.svg"
              alt="feather"
              width={20}
              height={30}
            />
          </div>

          <div>
            <Image
              src="/images/bx-package (1).svg"
              alt="feather"
              width={20}
              height={30}
            />
          </div>

          <div>
            <Image
              src="/images/user.svg"
              alt="feather"
              width={20}
              height={30}
            />
          </div>

          <div>
            <Image
              src="/images/bx-group.svg"
              alt="feather"
              width={20}
              height={30}
            />
          </div>
        </div>

        <div className="p-3 border-t border-r border-gray w-[4%] h-[83vh] flex flex-wrap flex-col gap-8 bg-custom-bg">
          <div>
            <Image
              src="/images/bx-bar-chart (2).svg"
              alt="feather"
              width={20}
              height={30}
            />
          </div>

          <div>
            <Image
              src="/images/bx-cog (1).svg"
              alt="feather"
              width={20}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebarnav;
