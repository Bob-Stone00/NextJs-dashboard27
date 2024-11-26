import Image from "next/image";
import VendorDetails from "./VendorDetails";
import PrTable from "./PrTable";
import PaymentDetails from "./PaymentDetails";

import TotalNav from "./TotalNav";
import TopSideBar from "./TopSideBar";

export function Dashboard() {
  return (
    <div className="w-[96%]  absolute top-[0] left-[4%] font-sans font-semibold">
      <TopSideBar />

      <div className="w-[95%] my-[20px] mx-[auto]">
        <div className="flex justify-between mt-[10px] px-4 sm:px-6 md:px-8">
          <div className="flex gap-3 items-center">
            <Image
              src="/images/bx-package (1).svg"
              alt="feather"
              width={25}
              height={25}
            />

            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
              Nouveau bon de reception
            </h2>
          </div>

          <div className="flex items-center">
            <Image
              src="/images/bx-x.svg"
              alt="feather"
              width={35}
              height={35}
            />
          </div>
        </div>

        <div className="flex bg-custom-bg w-full min-h-[55px] my-5 rounded-lg overflow-x-auto">
          <div className="p-2 mx-4 flex flex-wrap gap-4 items-center justify-start w-full">
            <div className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors min-w-fit">
              <Image src="/images/plus.svg" alt="add" width={20} height={20} />
              <p className="text-sm font-semibold whitespace-nowrap">
                Add Note
              </p>
            </div>

            <div className="w-[1px] h-[30px] bg-gray-300 hidden sm:block"></div>

            <div className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors min-w-fit">
              <Image src="/images/book.svg" alt="add" width={20} height={20} />
              <p className="text-sm font-semibold whitespace-nowrap">Preview</p>
            </div>

            <div className="w-[1px] h-[30px] bg-gray-300 hidden sm:block"></div>

            <div className="hidden md:flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors min-w-fit">
              <Image
                src="/images/bx-dollar-circle (1).svg"
                alt="add"
                width={20}
                height={20}
              />
              <p className="text-sm font-semibold whitespace-nowrap">
                Mark As Paid
              </p>
            </div>

            <div className="w-[1px] h-[30px] bg-gray-300 hidden md:block"></div>

            <div className="hidden md:flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors min-w-fit">
              <Image
                src="/images/printer.svg"
                alt="add"
                width={20}
                height={20}
              />
              <p className="text-sm whitespace-nowrap">Print</p>
            </div>

            <div className="w-[1px] h-[30px] bg-gray-300 hidden md:block"></div>

            <div className="relative">
              <select className="bg-transparent hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors focus:outline-none appearance-none pr-8">
                <option value="">More</option>
                <option value="mark-paid" className="md:hidden">
                  Mark As Paid
                </option>
                <option value="print" className="md:hidden">
                  Print
                </option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Image
                  src="/images/bx-chevron-down (1).svg"
                  alt="chevron"
                  width={16}
                  height={16}
                />
              </div>
            </div>
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
