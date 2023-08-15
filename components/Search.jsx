import React from "react";

const Search = () => {
  return (
    <div className="relative flex h-fit ml-auto  w-full lg:w-80 ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-900 focus:border-gray-900 dark:bg-white dark:border-gray-900 dark:placeholder-gray-900 dark:text-mainDarkText dark:focus:ring-gray-900 dark:focus:border-gray-900"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
