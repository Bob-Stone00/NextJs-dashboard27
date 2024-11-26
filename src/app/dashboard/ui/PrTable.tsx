import React from "react";
import Image from "next/image";

const PrTable: React.FC = () => {
  return (
    <div className="p-4 md:p-6 border rounded-lg space-y-4 md:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="w-full md:w-auto">
          <h2 className="text-lg font-semibold">Purchase Product</h2>
          <p className="text-sm text-gray-500">
            Use the search bar to search and select sale products.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex relative items-center">
            <Image
              src="/images/grid.svg"
              alt="grid"
              width={12}
              height={12}
              className="absolute left-4"
            />
            <button className="px-4 py-2 text-sm text-gray-700 border rounded-md w-full sm:w-24">
              View
            </button>
          </div>
          <button className="px-4 py-2 text-sm text-white bg-black rounded-md w-full sm:w-auto">
            + Add Product
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <Image
            src="/images/search.svg"
            alt="search"
            width={25}
            height={25}
            className="absolute left-3 top-3"
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-10 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Barcode..."
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Image
            src="/images/bx-barcode-reader.svg"
            alt="barcode"
            width={25}
            height={25}
            className="absolute right-3 top-3"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="min-w-[800px] px-4 md:px-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-600 border-b">
                <th className="py-3">Product name</th>
                <th className="py-3 text-center">Quantity</th>
                <th className="py-3 text-center">Purchase Price</th>
                <th className="py-3 text-center">Selling Price</th>
                <th className="py-3 text-center">Montant "HT"</th>
                <th className="py-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Maselko Margarain 200 grm",
                  stock: "In Stock: 50 Pcs",
                  stockClass: "text-gray-500",
                  quantity: 2,
                  purchasePrice: 1520.0,
                  sellingPrice: 250.0,
                  montant: "DZD 12.00",
                },
                {
                  name: "Chocolatte small",
                  stock: "Low Stock: 5 Pcs",
                  stockClass: "text-yellow-500",
                  quantity: 3,
                  purchasePrice: 540.0,
                  sellingPrice: 600.0,
                  montant: "DZD 1220.00",
                },
                {
                  name: "Savon Liquide Dove",
                  stock: "Out of Stock: 0 Pcs",
                  stockClass: "text-red-500",
                  quantity: 1,
                  purchasePrice: 278.0,
                  sellingPrice: 300.0,
                  montant: "DZD 120.00",
                },
              ].map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/play.svg"
                        alt="feather"
                        width={12}
                        height={12}
                      />
                      <div className="w-8 h-8 bg-gray-200 rounded flex-shrink-0"></div>
                      <div className="min-w-0">
                        <p className="font-medium truncate">{product.name}</p>
                        <p
                          className={`text-xs ${product.stockClass} font-bold`}
                        >
                          {product.stock}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-center">
                    <input
                      type="number"
                      value={product.quantity}
                      className="w-16 px-2 py-1 border rounded-md shadow-sm text-center focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </td>
                  <td className="py-3 text-center">
                    <div className="border p-2 rounded-lg whitespace-nowrap">{`${product.purchasePrice.toFixed(
                      2
                    )} DZD`}</div>
                  </td>
                  <td className="py-3 text-center">
                    <div className="border p-2 rounded-lg whitespace-nowrap">{`${product.sellingPrice.toFixed(
                      2
                    )} DZD`}</div>
                  </td>
                  <td className="py-3 text-center whitespace-nowrap">
                    {product.montant}
                  </td>
                  <td className="py-3 text-center">
                    <button className="text-gray-500 hover:text-red-500">
                      <Image
                        src="/images/stop-circle.svg"
                        alt="feather"
                        width={15}
                        height={15}
                        className="p-2 rounded-full"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrTable;
