import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="w-full px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-900">Codecelix</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 text-gray-700 font-semibold">
            <a href="#" className="hover:text-red-900 cursor-pointer">
              Home
            </a>
            <a href="#" className="hover:text-red-900 cursor-pointer">
              How It Works
            </a>
            <a href="#" className="hover:text-red-900 cursor-pointer">
              Services
            </a>
            <a href="#" className="hover:text-red-900 cursor-pointer">
              Contact
            </a>
          </nav>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <button className="bg-red-900 text-white px-5 py-2 rounded-md hover:bg-red-800 cursor-pointer">
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              {/* Hamburger Icon */}
              {!isOpen && (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              {/* Close Icon */}
              {isOpen && (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-full">
          <nav className="px-6 py-4 space-y-3 text-gray-700">
            <a href="#" className="block hover:text-red-900 cursor-pointer">
              Home
            </a>
            <a href="#" className="block hover:text-red-900 cursor-pointer">
              How It Works
            </a>
            <a href="#" className="block hover:text-red-900 cursor-pointer">
              Services
            </a>
            <a href="#" className="block hover:text-red-900 cursor-pointer">
              Contact
            </a>
            <button className="w-full bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 cursor-pointer">
              Sign In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
