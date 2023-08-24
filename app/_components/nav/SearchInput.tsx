"use client";

import React, { useEffect } from "react";
import SearchBarResults from "./SearchBarResults";
import Link from "next/link";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]); // <-- new
  const [searchActive, setSearchActive] = React.useState(false); // <-- new

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);

  }
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const getResults = async () => {
      const response = await fetch(`/api/search/${searchTerm}/1`);
      const results = await response.json();
      const sliced = results.results.slice(0, 5);
      setSearchResults(sliced);
    };
    if (searchTerm.length > 0) {
      timeoutId = setTimeout(() => {
        getResults();
      }, 500);
    } else {
      setSearchResults([]);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return (
    <div
      onFocus={() => setSearchActive(true)}
      className=" relative flex space-x-1 h-fit w-auto text-white text-xs rounded shadow "
    >
      <div className="hidden md:flex relative md:transition-transform ease-in-out">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={onSearch}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setTimeout(() => setSearchActive(false), 200)}
          className="bg-zinc-300 w-full h-8 text-black text-xs focus:outline-none focus:border-white"
        />
      </div>
      <Link href={`/search/${searchTerm}`} className=" py-1 px-2 w-fit h-full border-s border-white mx-auto">
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
      </Link>
      {searchActive && searchResults.length > 0 && (
        <SearchBarResults results={searchResults} clearSearch={() => clearSearch()}/>
      )}
    </div>
  );
};

export default SearchInput;
