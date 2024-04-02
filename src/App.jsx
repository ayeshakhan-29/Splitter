import React, { useState } from "react";
import user from "./assets/user.png";

export default function App() {
  const defaultTipPerPerson = 0;
  const defaultBillPerPerson = 0;

  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTipPercentage, setCustomTipPercentage] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const resetValues = () => {
    setBillAmount("");
    setTipPercentage(0);
    setCustomTipPercentage("");
    setNumberOfPeople("");
  };

  const calculateTipPerPerson = () => {
    const finalTipPercentage = customTipPercentage || tipPercentage;
    const bill = parseFloat(billAmount);
    const tip = bill * (finalTipPercentage / 100);
    const tipPerPerson = numberOfPeople === '' || numberOfPeople === '0' ? 0 : tip / parseFloat(numberOfPeople);
    const totalBillWithTip = bill + tip;
    const billPerPerson = numberOfPeople === '' || numberOfPeople === '0' ? 0 : totalBillWithTip / parseFloat(numberOfPeople);
    console.log("Bill Amount:", bill);
    console.log("Final Tip Percentage:", finalTipPercentage);
    console.log("Number of People:", numberOfPeople);
    console.log("Tip Per Person:", tipPerPerson);
    console.log("Bill Per Person:", billPerPerson);
    return {
      tipPerPerson: isNaN(tipPerPerson) ? 0 : tipPerPerson.toFixed(2),
      billPerPerson: isNaN(billPerPerson) ? 0 : billPerPerson.toFixed(2)
    };
  };


  return (
    <div className="h-full w-screen md:w-full md:h-full md:flex md:flex-wrap md:flex-col md:items-center md:justify-around">
      <div className="text-center md:py-8 py-6">
        <span className="uppercase font-mono text-3xl text-[#114A4E] tracking-widest">spli</span><br />
        <span className="uppercase font-mono text-3xl mt-2 text-[#114A4E] tracking-widest">tter</span>
      </div>

      <div className="h-[42rem] md:h-full grid md:grid-cols-2 bg-white rounded-[1.5rem] m-3 p-2 ">
        <div className="h-full w-full justify-center md:max-w-sm p-4">
          <label htmlFor="bill" className="block text-sm font-medium text-gray-500 ">Bill</label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex pointer-events-none">
              <span className="text-gray-400 mt-3 md:mt-4 text-lg md:text-lg">$</span>
            </div>
            <input
              type="text"
              name="bill"
              id="bill"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              className="peer w-full h-full  bg-transparent pl-10 pr-3 sm:text-2xl rounded-md text-right bg-zinc-100 text-[#114A4E]  font-bold outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-lg px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              placeholder="0"
            />
          </div>

          {/* Select Tip section */}
          <label htmlFor="selectTip" className="block text-sm font-medium text-gray-500 py-4 md:py-4">Select Tip %</label>
          <div className="flex mb-4">
            <button
              className={`mr-4 px-4 py-2 ${selectedButton === 5 ? 'bg-[#26C2AD] text-[#114A4E]' : 'bg-[#114A4E] text-white'} text-lg font-bold rounded-md w-[5.5rem] md:w-[6.5rem]`}
              onClick={() => { setTipPercentage(5); setSelectedButton(5); }}
            >
              5%
            </button>
            <button className={`mr-4 px-4 py-2 ${selectedButton === 10 ? 'bg-[#26C2AD] text-[#114A4E]' : 'bg-[#114A4E] text-white'} text-lg font-bold rounded-md w-[5.5rem] md:w-[6.5rem]`} onClick={() => { setTipPercentage(10); setSelectedButton(10); }}>10%</button>
            <button className={`px-4 py-2 ${selectedButton === 15 ? 'bg-[#26C2AD] text-[#114A4E]' : 'bg-[#114A4E] text-white'}  text-lg font-bold rounded-md w-[5.5rem] md:w-[6.5rem]`} onClick={() => { setTipPercentage(15); setSelectedButton(15); }}>15%</button>
          </div>
          <div className="flex mb-4">
            <button className={`mr-4 px-4 py-2 ${selectedButton === 25 ? 'bg-[#26C2AD] text-[#114A4E]' : 'bg-[#114A4E] text-white'}  text-lg font-bold rounded-md w-[5.5rem] md:w-[6.5rem]`} onClick={() => { setTipPercentage(25); setSelectedButton(25); }}>25%</button>
            <button className={`mr-4 px-4 py-2 ${selectedButton === 50 ? 'bg-[#26C2AD] text-[#114A4E]' : 'bg-[#114A4E] text-white'}  text-lg font-bold rounded-md w-[5.5rem] md:w-[6.5rem]`} onClick={() => { setTipPercentage(50); setSelectedButton(50); }}>50%</button>
            <input
              type="text"
              className="bg-gray-100 border md:text-center text-center text-sm md:text-lg font-semibold text-[#114A4E] rounded-md px-3 py-2 w-[5.5rem] md:w-[6.5rem] outline outline-0 focus:outline-0 border focus:border-2 focus:border-blue-500"
              placeholder="Custom"
              value={customTipPercentage}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '' || (/^\d+$/.test(value) && value >= 1 && value <= 100)) {
                  setCustomTipPercentage(value);
                  setTipPercentage(value);
                }
              }}
            />
            {customTipPercentage && (parseInt(customTipPercentage) === 0 || parseInt(customTipPercentage) > 100) && (
              <span className="text-red-500 text-sm font-medium ml-2">Enter a number between 1 and 100</span>
            )}

            {customTipPercentage && (parseInt(customTipPercentage) === 0 || parseInt(customTipPercentage) > 100) && (
              <span className="text-red-500 text-sm font-medium ml-2">Enter a number between 1 and 100</span>
            )}

          </div>
          {/* Number of People section */}
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={user} className="md:h-[1.5rem] h-[1.2rem] mt-12 md:mt-10" alt="user" />
            </div>
            <div className="flex">
              <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-500 md:py-3 py-3">
                Number of People
              </label>
              {numberOfPeople && parseInt(numberOfPeople) === 0 && (
                <span className="text-red-500 text-sm font-medium ml-24 md:ml-36 md:py-3 py-3">can't be zero</span>
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
              className={`peer w-full h-full bg-transparent pl-10 pr-3 sm:text-2xl rounded-md text-right bg-zinc-100 text-[#114A4E] font-bold outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-lg px-3 py-2.5 rounded-[7px] ${numberOfPeople && parseInt(numberOfPeople) === 0 ? 'border-red-500' : 'border-blue-gray-200 focus:border-blue-500'}`}
              placeholder="0"
            />
          </div>
        </div>

        <div className="h-full w-full justify-center md:max-w-sm p-4 md:flex ">
          {/* Tip Per Person */}
          <div className=" bg-[#114A4E] rounded-lg md:w-full">
            <div className="p-8 flex justify-between gap-4 items-center  ">
              <div>
                <label className="block text-sm font-medium text-white">Tip Amount</label>
                <p className="font-normal text-xs text-gray-100">/ person</p>
              </div>

              <p className="text-4xl font-semibold text-[#26C2AD]">${calculateTipPerPerson().tipPerPerson}</p>
            </div>

            {/* Bill Per Person */}
            <div className="px-8 flex justify-between gap-3 md:flex md:gap-2 items-center">
              <div>
                <label className="block text-sm font-medium text-white">Total</label>
                <p className="font-normal text-xs text-gray-100">/ person</p>
              </div>
              <p className="text-4xl font-semibold text-[#26C2AD]">${calculateTipPerPerson().billPerPerson}</p>
            </div>
            {/* Reset Button */}
            <div className="flex justify-center items-center md:mt-16">
              <button className="m-8 h-[2.5rem] w-[15rem] rounded-lg bg-[#26C2AD]" onClick={resetValues}>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
