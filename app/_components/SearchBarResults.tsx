"use client";

import React, { useEffect, useState } from "react";
import SearchBarItem from "./SearchBarItem";
import Image from "next/image";
import { clear } from "console";

const SearchBarResults = (results, clearSearch, setSearchActive) => {
  return (
    <div  className="absolute flex flex-col -bottom-[260px] -left-40 min-w-fit h-fit text-white text-xs rounded shadow ">
      <div className=" md:block w-80 h-auto relative space-y-2 p-2 bg-white md:transition-transform ease-in-out">
        {results.results.map((result) => (
          <SearchBarItem key={result.id} result={result} clearSearch={clearSearch} />
        ))}
      </div>
    </div>
  );
};
export default SearchBarResults;
