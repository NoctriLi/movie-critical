"use client";

import React, { useEffect } from "react";
import SearchBarResults from "./SearchBarResults";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]); // <-- new
  const [searchActive, setSearchActive] = React.useState(false); // <-- new

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  function clearSearch() {
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
      className="flex flex-col relative gap-0 min-w-fit h-fit text-white text-xs rounded shadow "
    >
      <div className="hidden md:block relative md:transition-transform ease-in-out">
        <h1 className="text-white ">search</h1>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={onSearch}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setTimeout(() => setSearchActive(false), 200)}
          className="bg-zinc-300 border-b-2 border-white w-full h-8 text-black text-xs focus:outline-none focus:border-white"
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
      {searchActive && searchResults.length > 0 && (
        <SearchBarResults results={searchResults} clearSearch={clearSearch} setSearchActive={setSearchActive}/>
      )}
    </div>
  );
};

export default SearchInput;
