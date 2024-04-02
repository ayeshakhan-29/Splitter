import React, { useState } from "react";
import user from "./assets/user.png"

export default function App() {
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
        <div className="h-screen w-screen bg-[#C5E4E7]">
            <p>hiiii</p>
            <div className="flex flex-col md:flex-row md:h-[25rem] h-[20rem] justify-center border border-black bg-white mt-20 m-5 md:mx-[20rem] rounded-lg">
                <div className="h-full w-full justify-center md:max-w-sm m-4 p-4">
                    <label htmlFor="bill" className="block text-sm font-medium text-gray-700">Bill</label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex pointer-events-none">
                            <span className="text-gray-500 mt-3 sm:text-sm">$</span>
                        </div>
                        <input
                            type="text"
                            name="bill"
                            id="bill"
                            value={billAmount}
                            onChange={(e) => setBillAmount(e.target.value)}
                            className="peer w-full h-full bg-transparent pl-10 pr-3 sm:text-sm rounded-md text-right bg-gray-100  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                            placeholder="0"
                        />
                    </div>



                    {/* Select Tip section */}
                    <div className="h-full w-full max-w-sm p-8 mt-[-20px]">
                        <label htmlFor="selectTip" className="block text-sm font-medium text-gray-700 mb-2">Select Tip</label>
                        <div className="flex mb-4">
                            <button className="mr-4 px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(5)}>5%</button>
                            <button className="mr-4 px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(10)}>10%</button>
                            <button className="px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(15)}>15%</button>
                        </div>
                        <div className="flex mb-4">
                            <button className="mr-4 px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(25)}>25%</button>
                            <button className="mr-4 px-4 py-2 bg-[#114A4E] text-white rounded-md w-[5rem]" onClick={() => setTipPercentage(50)}>50%</button>
                            <input type="text" className="bg-gray-100 border text-sm border-gray-300 text-[#114A4E] rounded-md px-3 py-2 w-[5rem] focus:outline-0" placeholder="Custom" />
                        </div>
                    </div>

                    {/* Number of People section */}
                    <div className="h-full w-full p-8 md:mt-[-3rem]">
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
                                className="peer w-full h-full bg-transparent pl-10 pr-3 sm:text-sm rounded-md text-right bg-gray-100  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                placeholder="0"
                            />
                        </div>
                    </div>

                </div>

                {/* Tip Per Person */}
                <div className="flex md:flex-col justify-center w-full bg-[#114A4E] max-w-sm rounded-lg my-4 mx-2">
                    <div class="p-8 flex justify-between gap-4 items-center">
                        <div>
                            <label class="block text-sm font-medium text-white">Tip Amount</label>
                            <p className="font-normal text-xs text-gray-100">/ person</p>
                        </div>

                        <p class="text-4xl font-semibold text-[#26C2AD]">${calculateTipPerPerson().tipPerPerson}</p>
                    </div>

                    {/* Bill Per Person */}
                    <div className="p-8 flex justify-between gap-4 items-center">
                        <div>
                            <label class="block text-sm font-medium text-white">Total</label>
                            <p className="font-normal text-xs text-gray-100">/ person</p>
                        </div>
                        <p className="text-4xl font-semibold text-[#26C2AD]">${calculateTipPerPerson().billPerPerson}</p>
                    </div>
                    <button className="m-8 h-[2.5rem] rounded-lg bg-[#26C2AD]">RESET</button>
                </div>
            </div>
        </div>
    );
}