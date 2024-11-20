import React from "react";
import Image from "next/image";

const TotalNav: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-t ">
      <div className="flex space-x-4">
        <button className="flex items-center px-2 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm">
          <Image
            src="/images/bookmark.svg"
            alt="feather"
            width={18}
            height={15}
          />
          Save and Draft
        </button>

        <button className="flex items-center px-2 py-2 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm">
          <Image
            src="/images/file-text.svg"
            alt="feather"
            width={18}
            height={15}
          />
          Save Order
        </button>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold text-gray-900">
          Montant total: <span className="text-black">DZD 1252.00</span>
        </p>
        <p className="text-sm text-gray-600">Quantité totale: 6</p>
      </div>
    </div>
  );
};

export default TotalNav;
