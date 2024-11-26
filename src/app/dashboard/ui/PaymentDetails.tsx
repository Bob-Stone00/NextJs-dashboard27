import React from "react";
import Image from "next/image";

const PaymentDetails = () => {
  return (
    <div className="p-4 sm:p-6 bg-custom-bg rounded-lg flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Payment Details Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Payment details</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <label
            className="flex items-center gap-2 cursor-pointer border-2 p-3 
                          w-full sm:w-auto min-w-[120px]
                          rounded-full focus-within:border-black-500 hover:border-gray-400 
                          transition-colors"
          >
            <input
              type="radio"
              name="paymentStatus"
              value="paid"
              className="w-4 h-4 text-blue-500 focus:ring-blue-400"
              defaultChecked
            />
            <span className="text-gray-700 text-sm whitespace-nowrap">
              Paid
            </span>
          </label>

          <label
            className="flex items-center gap-2 cursor-pointer border-2 p-3 
                          w-full sm:w-auto min-w-[160px]
                          rounded-full hover:border-gray-400 
                          transition-colors"
          >
            <input
              type="radio"
              name="paymentStatus"
              value="partialPayment"
              className="w-4 h-4 text-blue-500 focus:ring-blue-400"
            />
            <span className="text-gray-700 text-sm whitespace-nowrap">
              Partial Payment
            </span>
            <Image
              src="/images/eye.svg"
              alt="View details"
              width={12}
              height={12}
              className="ml-1"
            />
          </label>
        </div>
      </div>

      {/* Order Summary Section */}
      <div
        className="w-full md:w-1/2 md:border-l md:pl-8 pt-6 md:pt-0 
                      border-t md:border-t-0"
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full 
                             hover:bg-gray-200 transition-colors"
              aria-label="Information"
            >
              <Image
                src="/images/bx-info-circle.svg"
                alt="Information"
                width={18}
                height={15}
              />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full 
                             hover:bg-gray-200 transition-colors"
              aria-label="Add item"
            >
              <Image src="/images/plus.svg" alt="Add" width={18} height={15} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-gray-700 text-sm">
            <span>Total unit</span>
            <span className="font-medium">25</span>
          </div>
          <div className="flex justify-between text-gray-700 text-sm">
            <span>Montant &quot;HT&quot;</span>
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
