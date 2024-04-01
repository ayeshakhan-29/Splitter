import React from "react";

export default function Navbar() {
  return (
    <div className="w-full border h-full py-6 px-4 fixed top-0 bg-transparent">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex gap-4">
          <a href="#" className="text-lg">
            Home
          </a>
          <a href="#" className="text-lg">
            About
          </a>
          <a href="#" className="text-lg">
            Services
          </a>
          <a href="#" className="text-lg">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
