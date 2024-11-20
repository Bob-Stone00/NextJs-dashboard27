import Image from "next/image";
import VendorDetails from "./VendorDetails";
import PrTable from "./PrTable";
import PaymentDetails from "./PaymentDetails";

import TotalNav from "./TotalNav";
import TopSideBar from "./TopSideBar";

export function Dashboard() {
  return (
    <div className="w-[96%]  absolute top-[0] left-[4%]">
      <TopSideBar />

      <div className="w-[95%] my-[20px] mx-[auto]">
        <div className="flex justify-between mt-[10px]">
          <div className="flex gap-3 ">
            <Image
              src="/images/bx-package (1).svg"
              alt="feather"
              width={25}
              height={25}
            />

            <h2 className="font-medium text-2xl">Nouveau bon de reception</h2>
          </div>

          <div>
            <Image
              src="/images/bx-x.svg"
              alt="feather"
              width={35}
              height={35}
            />
          </div>
        </div>

        <div className="flex bg-custom-bg w-full h-[70px] my-[20px] rounded-lg">
          <div className="p-2 ml-4 flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <Image src="/images/plus.svg" alt="add" width={20} height={20} />
              <p className="text-xm">Add Note</p>
            </div>

            <div className="w-[1px] h-[30px] bg-gray-500"></div>

            <div className="flex gap-2 items-center">
              <Image src="/images/book.svg" alt="add" width={20} height={20} />
              <p className="text-xm">Preview</p>
            </div>

            <div className="w-[1px] h-[30px] bg-gray-500"></div>

            <div className="flex gap-2 items-center">
              <Image
                src="/images/bx-dollar-circle (1).svg"
                alt="add"
                width={20}
                height={20}
              />
              <p className="text-xm">Mark As Paid</p>
            </div>

            <div className="w-[1px] h-[30px] bg-gray-500"></div>

            <div className="flex gap-2 items-center">
              <Image
                src="/images/printer.svg"
                alt="add"
                width={20}
                height={20}
              />
              <p className="text-xm">Print</p>
            </div>

            <div className="w-[1px] h-[30px] bg-gray-500"></div>

            <select>
              <option>More</option>
            </select>
          </div>
        </div>

        <div className="my-4">
          <VendorDetails />
        </div>

        <div className="my-6">
          <PrTable />
        </div>

        <div className="my-6">
          <PaymentDetails />
        </div>
      </div>

      <div className="">
        <TotalNav />
      </div>
    </div>
  );
}
