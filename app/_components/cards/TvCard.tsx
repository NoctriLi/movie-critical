import React, { useCallback } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import LazyImage from "../LazyImage";
import { TVShow } from "@/lib/interfaces";

const TvCard: React.FC<TVShow> = (tvshow) => {
  return (
    <div className="relative min-w-[175px] h-fit bg-white rounded shadow overflow-hidden snap-center">
      {tvshow.poster_path != undefined ? (
        <LazyImage
          src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
          alt={tvshow.name}
        />
      ) : (
        <div className="min-w-[175px] h-[262px] object-cover bg-gray-400 flex items-center">
          <h1 className="w-full text-center font-bold">{tvshow.name}</h1>
        </div>
      )}
      <div className="@container absolute bottom-0 left-0 w-full h-full p-3 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100">
        <div className="max-h-[75%] overflow-y-auto text-[.7rem]">
          <p>{tvshow.overview}</p>
        </div>
        <Link
          href={`/tvseries/${tvshow.id}`}
          className="absolute bottom-0 mt-2 px-4 py-2 bg-zinc-800 rounded text-white"
        >
          More...
        </Link>
      </div>
    </div>
  );
};

export default TvCard;
