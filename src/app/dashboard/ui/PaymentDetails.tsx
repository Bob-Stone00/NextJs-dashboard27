import React from "react";
import Image from "next/image";

const PaymentDetails: React.FC = () => {
  return (
    <div className="p-6 bg-custom-bg rounded-lg flex justify-between items-center  space-x-6">
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4">Payment details</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer border-2 p-3 w-[18%] rounded-full focus:border-black-500">
            <input
              type="radio"
              name="paymentStatus"
              value="paid"
              className="w-4 h-4 text-blue-500 focus:ring-blue-400"
              defaultChecked
            />
            <span className="text-gray-700 text-xs">Paid</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer border-2 p-3 w-[25%] rounded-full">
            <input
              type="radio"
              name="paymentStatus"
              value="partialPayment"
              className="w-4 h-4 text-blue-500 focus:ring-blue-400"
            />
            <span className="text-gray-700 text-xs">Partial Payment</span>
          </label>
        </div>
      </div>

      <div className="flex-1 border-l pl-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">Order summary</h2>

          <div className="flex items-start space-x-2">
            <button className="w-8 h-8 flex items-center justify-center  rounded-full hover:bg-gray-300">
              <Image
                src="/images/bx-info-circle.svg"
                alt="feather"
                width={18}
                height={15}
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center  rounded-full hover:bg-gray-300">
              <Image
                src="/images/plus.svg"
                alt="feather"
                width={18}
                height={15}
              />
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Total unit</span>
            <span className="font-medium">25</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Montant “HT”</span>
            <span className="font-medium">DZD 1240.00</span>
          </div>
          <div className="flex justify-between text-gray-900 font-semibold">
            <span>Montant total</span>
            <span>DZD 2245.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
