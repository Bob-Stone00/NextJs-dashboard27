import React from "react";

const VendorDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 border-gray-500">
      <div className="space-y-4 border p-5 rounded-lg">
        <h2 className="text-lg font-semibold">Purchase Detail</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label
              className="block text-sm text-gray-600"
              htmlFor="reception-number"
            >
              N° d’avis de réception
            </label>
            <input
              id="reception-number"
              type="text"
              value="AR-24-02-0001"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
              readOnly
            />
          </div>
          <div>
            <label
              className="block text-sm text-gray-600"
              htmlFor="reception-date"
            >
              Date de réception
            </label>
            <input
              id="reception-date"
              type="text"
              value="5 juin 2024"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
              readOnly
            />
          </div>

          <div>
            <label
              className="block text-sm text-gray-600"
              htmlFor="stock-location"
            >
              Stock location
            </label>
            <select
              id="stock-location"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
            >
              <option>Depot 2400</option>
            </select>
          </div>

          <div>
            <label
              className="block text-xs text-gray-600"
              htmlFor="order-number"
            >
              N° du bon de commande
            </label>
            <select
              id="order-number"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
            >
              <option>BCF-00325</option>
            </select>
          </div>

          <a href="" className="text-sm text-blue-500 ">
            More information
          </a>
        </div>
      </div>

      <div className="space-y-4  border p-5 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Vendor Detail</h2>
          <button className="p-2 text-sm text-white bg-black rounded-md ">
            + Add Vendor
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600" htmlFor="vendor">
              Vendor
            </label>
            <select
              id="vendor"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
            >
              <option className="text-xs">Kaci Vachouch</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600" htmlFor="debt">
              Debt
            </label>
            <input
              id="debt"
              type="text"
              value="250.000"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs"
              readOnly
            />
          </div>
        </div>

        <a href="" className="text-sm text-blue-500 ">
          More information
        </a>
      </div>
    </div>
  );
};

export default VendorDetails;
