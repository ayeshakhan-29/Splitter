import React from "react";

export default function Card() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white border border-black">
      <div className="p-8 rounded-lg shadow-md">
        <label htmlFor="bill" className="block text-sm font-medium text-gray-700">Bill</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="bill"
            id="bill"
            className="block w-full border-transparent focus:border-blue-500 pl-10 pr-3 sm:text-sm rounded-md text-right bg-gray-100 text-custom-color "
            placeholder="0"
          />
        </div>
      </div>

      <div>
        <label htmlFor="selectTip" className="block text-sm font-medium text-gray-700 mb-2">Select Tip</label>
        <div className="flex mb-4">
          <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md">5%</button>
          <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md">10%</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">15%</button>
        </div>
        <div className="flex mb-4">
          <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md">25%</button>
          <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md">50%</button>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 w-32" placeholder="Custom Tip" />
        </div>
      </div>
    </div>
  );
}
