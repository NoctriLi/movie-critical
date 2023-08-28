import React from "react";
import SearchBarItem from "./SearchBarItem";

interface SearchBarResultsProps {
  results: {
    id: number;
    name?: string;
    title?: string;
    media_type: string;
    poster_path?: string;
    profile_path?: string;
    release_date?: string;
    first_air_date?: string;
  }[];
  clearSearch: () => void;
}

const SearchBarResults: React.FC<SearchBarResultsProps> = (
  results,
  clearSearch
) => {
  return (
    <div className="absolute flex flex-col top-10 right-10 min-w-fit h-fit bg-background text-foreground text-xs rounded shadow ">
      <div className=" md:block w-80 h-auto relative space-y-2 p-2  md:transition-transform ease-in-out">
        {results.results.map((result) => (
          <SearchBarItem
            key={result.id}
            result={result}
            clearSearch={clearSearch}
          />
        ))}
      </div>
    </div>
  );
};
export default SearchBarResults;
