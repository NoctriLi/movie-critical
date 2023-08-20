"use client";

import React from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col relative gap-0 min-w-fit h-fit text-white text-xs rounded shadow ">
      <div className="hidden md:block relative md:transition-transform ease-in-out">
      <h1 className="text-white ">search</h1>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={onSearch}
        />
      </div>
      <div className="block md:hidden md:transition-transform ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
