import React from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 w-full bg-green-50 border-b border-green-200 shadow-sm flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-green-700">ETMS Admin Panel</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-1 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-200 bg-green-50"
          />
          <FiSearch className="absolute left-2 top-2 text-gray-400" />
        </div>
        <FiBell className="text-xl text-gray-500 hover:text-green-600 cursor-pointer" />
        <div className="relative">
          <button className="flex items-center gap-2 px-2 py-1 rounded-md bg-green-100 hover:bg-green-50 border border-green-200">
            <FiUser className="text-lg text-green-700" />
            <span className="hidden md:inline text-gray-700">Admin</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
