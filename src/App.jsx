import React, { useState } from "react";
import user from "./assets/user.png"

export default function Card() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const calculateTipPerPerson = () => {
    const bill = parseFloat(billAmount);
    const tip = bill * (tipPercentage / 100);
    const tipPerPerson = tip / parseFloat(numberOfPeople);
    const totalBillWithTip = bill + tip;
    const billPerPerson = totalBillWithTip / parseFloat(numberOfPeople);
    console.log("Bill Amount:", bill);
    console.log("Tip Percentage:", tipPercentage);
    console.log("Number of People:", numberOfPeople);
    console.log("Tip Per Person:", tipPerPerson);
    console.log("Bill Per Person:", billPerPerson);
    return {
      tipPerPerson: isNaN(tipPerPerson) ? 0 : tipPerPerson.toFixed(2),
      billPerPerson: isNaN(billPerPerson) ? 0 : billPerPerson.toFixed(2)
    };
  };

  return (
    <div className="h-screen">
      <p>hiiii</p>
      <div className="flex justify-center bg-white mt-20 mx-[20rem] rounded-lg">
        <div className="h-full w-full justify-center max-w-sm border bg-gray-100 p-4">
          <label htmlFor="bill" className="block text-sm font-medium text-gray-700">Bill</label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="bill"
              id="bill"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              className="block w-full border-transparent focus:border-blue-500 pl-10 pr-3 sm:text-sm rounded-md text-right bg-gray-100 text-custom-color"
              placeholder="0"
            />
          </div>


          {/* Select Tip section */}
          <div className="p-8 mt-[-28px]">
            <label htmlFor="selectTip" className="block text-sm font-medium text-gray-700 mb-2">Select Tip</label>
            <div className="flex mb-4">
              <button className="mr-4 px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(5)}>5%</button>
              <button className="mr-4 px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(10)}>10%</button>
              <button className="px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(15)}>15%</button>
            </div>
            <div className="flex mb-4">
              <button className="mr-4 px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(25)}>25%</button>
              <button className="mr-4 px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(50)}>50%</button>
              <input type="text" className="bg-gray-100 border border-gray-300 text-[#114A4E] rounded-md px-3 py-2 w-[5rem]" placeholder="Custom" />
            </div>
          </div>

          {/* Number of People section */}
          <div className="p-8 mt-[-3rem]">
            <label className="block text-sm font-medium text-gray-500">Number of People</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={user} className="h-[1rem] py-[2px]" alt="user" />
              </div>
              <input
                type="text"
                name="numberOfPeople"
                id="numberOfPeople"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="block w-full border-transparent focus:border-blue-500 pl-10 pr-3 sm:text-sm rounded-md text-right bg-gray-100 text-black"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Tip Per Person */}
        <div className=" h-full w-full bg-gray-200 rounded-lg px-10 py-5">
          <div className="p-8">
            <label className="block text-sm font-medium text-gray-700">Tip Per Person</label>
            <p className="text-lg font-semibold text-gray-900">${calculateTipPerPerson().tipPerPerson}</p>
          </div>

          {/* Bill Per Person */}
          <div className="p-8">
            <label className="block text-sm font-medium text-gray-700">Bill Per Person</label>
            <p className="text-lg font-semibold text-gray-900">${calculateTipPerPerson().billPerPerson}</p>
          </div>
        </div>
      </div>
    </div>
  );
}