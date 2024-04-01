import React from "react";
import Card from "./Components/Sections/Card";

export default function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* <div className="whitespace-no-wrap mt-[-20rem] text-3xl uppercase">
        <span className="tracking-wider">S</span>
        <span className="tracking-wider">P</span>
        <span className="tracking-wider">L</span>
        <span className="tracking-wider">I</span>
        <br />
        <span className="tracking-wider">T</span>
        <span className="tracking-wider">T</span>
        <span className="tracking-wider">E</span>
        <span className="tracking-wider">R</span>
      </div> */}
      <div className="flex bg-white rounded-lg">
        <Card />

      </div>

    </div>
  );
}
