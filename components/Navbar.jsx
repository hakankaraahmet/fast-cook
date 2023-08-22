'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { outSideClick } from "../shared/outSideClick";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSideBar, setIsSideBar] = useState(false);
  const sideBarRef = useRef(null);

  useEffect(() => {
    outSideClick(sideBarRef, setIsSideBar);
  }, [sideBarRef]);

  return (
    <nav className="bg-mainDarkText  bg-opacity-40 px-8 shadow-xl z-50">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" className="h-10 w-10 mr-3 " alt="Fast Cook" />
          <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-white">
            Fast Cook
          </span>
        </Link>
        <div className="flex md:order-2 lg:hidden">
          <button
            onClick={() => setIsSideBar(!isSideBar)}
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-mainDarkText rounded-lg md:hidden hover:bg-mainDarkText focus:outline-none  dark:text-white dark:hover:bg-mainDarkText "
            aria-controls="navbar-search"
            aria-expanded="false"
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
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1  ${
            isSideBar ? "block" : "hidden"
          }`}
          id="navbar-search"
          ref={sideBarRef}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 rounded  md:p-0 ${
                  pathname === "/" || router.asPath === '/[recipeId]'
                  ? " text-white"
                  : "opacity-40 hover:opacity-100"
                }`}
                aria-current="page"
              >
                Cuisines
              </Link>
            </li>
            <li>
              <Link
                href="/restaurants"
                className={`block py-2 pl-3 pr-4 rounded  md:p-0 ${
                  pathname === "/restaurants"
                    ? " text-white"
                    : "opacity-40 hover:opacity-100"
                }`}
              >
                Restaurants
              </Link>
            </li>
            <li>
              <Link
                href="/about-me"
                className={`block py-2 pl-3 pr-4 rounded  md:p-0 ${
                  pathname === "/about-me"
                  ? " text-white"
                  : "opacity-40 hover:opacity-100"
                }`}
              >
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
