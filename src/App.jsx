import React, { useState } from "react";
import user from "./assets/user.png";

export default function App() {
  const defaultTipPerPerson = 0;
  const defaultBillPerPerson = 0;

  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const resetValues = () => {
    setBillAmount("");
    setTipPercentage(0);
    setNumberOfPeople("");
  };

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
    <div className="h-screen w-screen">
      <div className="text-center pt-4">
        <span className="uppercase font-mono text-3xl text-[#114A4E] tracking-widest">spli</span><br />
        <span className="uppercase font-mono text-3xl mt-2 text-[#114A4E] tracking-widest">tter</span>
      </div>

      <div className="h-full grid md:grid-cols-2 bg-white rounded-lg m-3 p-2 ">
        <div className="h-full w-full justify-center md:max-w-sm p-4">
          <label htmlFor="bill" className="block text-sm font-medium text-gray-500 ">Bill</label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex pointer-events-none">
              <span className="text-gray-400 mt-2 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="bill"
              id="bill"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              className="peer w-full h-full bg-transparent pl-10 pr-3 sm:text-2xl rounded-md text-right bg-zinc-100 text-[#114A4E] font-sans font-bold outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-lg px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              placeholder="0"
            />
          </div>

          {/* Select Tip section */}
          <label htmlFor="selectTip" className="block text-sm font-medium text-gray-500 my-2">Select Tip</label>
          <div className="flex mb-4">
            <button className={`mr-4 px-4 py-2 ${selectedButton === 5 ? 'bg-[#26C2AD]' : 'bg-[#114A4E]'} text-white rounded-md w-[5.5rem]`} onClick={() => { setTipPercentage(5); setSelectedButton(5); }}>5%</button>
            <button className={`mr-4 px-4 py-2 ${selectedButton === 10 ? 'bg-[#26C2AD]' : 'bg-[#114A4E]'} text-white rounded-md w-[5.5rem]`} onClick={() => { setTipPercentage(10); setSelectedButton(10); }}>10%</button>
            <button className={`px-4 py-2 ${selectedButton === 15 ? 'bg-[#26C2AD]' : 'bg-[#114A4E]'} text-white rounded-md w-[5.5rem]`} onClick={() => { setTipPercentage(15); setSelectedButton(15); }}>15%</button>
          </div>
          <div className="flex mb-4">
            <button className={`mr-4 px-4 py-2 ${selectedButton === 25 ? 'bg-[#26C2AD]' : 'bg-[#114A4E]'} text-white rounded-md w-[5.5rem]`} onClick={() => { setTipPercentage(25); setSelectedButton(25); }}>25%</button>
            <button className={`mr-4 px-4 py-2 ${selectedButton === 50 ? 'bg-[#26C2AD]' : 'bg-[#114A4E]'} text-white rounded-md w-[5.5rem]`} onClick={() => { setTipPercentage(50); setSelectedButton(50); }}>50%</button>
            <input type="text" className="bg-gray-100 border text-sm border-gray-300 text-[#114A4E] rounded-md px-3 py-2 w-[5.5rem] focus:outline-0" placeholder="Custom" />
          </div>
          {/* Number of People section */}
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={user} className="h-[1.5rem] py-[2px] mt-5" alt="user" />
            </div>
            <div className="flex">
              <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-500">
                Number of People
              </label>
              {numberOfPeople && parseInt(numberOfPeople) === 0 && (
                <span className="text-red-500 text-sm font-medium ml-20">can't be zero</span>
              )}
            </div>
            <input
              type="number"
              name="numberOfPeople"
              id="numberOfPeople"
              value={numberOfPeople}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setNumberOfPeople(value);
                }
              }}
              className={`peer w-full h-full bg-transparent pl-10 pr-3 sm:text-2xl rounded-md text-right bg-zinc-100 text-[#114A4E] font-sans font-bold outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-lg px-3 py-2.5 rounded-[7px] ${numberOfPeople && parseInt(numberOfPeople) === 0 ? 'border-red-500' : 'border-blue-gray-200 focus:border-blue-500'}`}
              placeholder="0"
            />
          </div>



        </div>

        <div className="h-full w-full justify-center md:max-w-sm p-4 mt-[-3rem]">
          {/* Tip Per Person */}
          <div className=" bg-[#114A4E] rounded-lg">
            <div className="p-8 flex justify-between gap-4 items-center  ">
              <div>
                <label className="block text-sm font-medium text-white">Tip Amount</label>
                <p className="font-normal text-xs text-gray-100">/ person</p>
              </div>

              <p className="text-4xl font-semibold text-[#26C2AD]">${calculateTipPerPerson().tipPerPerson}</p>
            </div>

            {/* Bill Per Person */}
            <div className="px-8 flex justify-between gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-white">Total</label>
                <p className="font-normal text-xs text-gray-100">/ person</p>
              </div>
              <p className="text-4xl font-semibold text-[#26C2AD]">${calculateTipPerPerson().billPerPerson}</p>
            </div>
            {/* Reset Button */}
            <div className="flex justify-center items-center">
              <button className="m-8 h-[2.5rem] w-[15rem] rounded-lg bg-[#26C2AD]" onClick={resetValues}>RESET</button>
            </div>

          </div>

        </div>


      </div>
    </div>
  );
}
