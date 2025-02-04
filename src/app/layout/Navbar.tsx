"use client";

import Link from "next/link";
import { useState } from "react";
import DarkModeSwitch from "../shared/components/DarkModeSwitch";

const NavLink = ({ to, text }: { to: string; text: string }) => (
  <Link
    href={to}
    className="block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0 dark:text-white hover:underline"
  >
    {text}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse hover:underline"
        >
          <span className="self-center text-2xl whitespace-nowrap dark:text-white">
            batchler.me
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        {/* Mobile Menu with Animation */}
        <div
          className={`w-full md:w-auto overflow-hidden transition-all duration-300 ease-in-out p-4 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100 md:block`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/about" text="About" />
            </li>
            <li>
              <NavLink to="/posts" text="Posts" />
            </li>
            <li>
              <NavLink to="/projects" text="Projects" />
            </li>
            <li>
              <DarkModeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
