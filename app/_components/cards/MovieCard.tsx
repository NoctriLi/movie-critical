import React, { useCallback } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import LazyImage from "../LazyImage";
import { Movie } from "@/lib/interfaces";

const MovieCard: React.FC<Movie> = (movie) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/movies/${movie.id}`),
  //   [router, movie.id]
  // );
    
  return (
    <div className="relative min-w-[175px] h-fit bg-white rounded shadow overflow-hidden">
      {movie.poster_path != undefined?<LazyImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        
      />:<div className="min-w-[175px] h-[262px] object-cover bg-gray-400 flex items-center"><h1 className="w-full text-center font-bold">{movie.title}</h1></div>}
      <div className="@container absolute bottom-0 left-0 w-full h-full p-3 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100">
        <div className="max-h-[75%] overflow-y-auto text-[.7rem]">
          <p>{movie.overview}</p>
        </div>
        <Link
          href={`/movies/${movie.id}`}
          className="absolute bottom-0 mt-2 px-4 py-2 bg-zinc-800 rounded text-white"
        >More...</Link>
        {/* <button
          onClick={redirectToSummary}
          className="absolute bottom-0 mt-2 px-4 py-2 bg-blue-500 rounded text-white"
        >
          More!
        </button> */}
      </div>
    </div>
    // <div className="card flex">

    //   <div
    //     key={movie.id}
    //     className=" relative w-fit overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
    //   >
    //     <img
    //       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //       alt={movie.title}
    //       className="h-full w-full  min-w-[200px] object-center lg:h-full lg:w-full"
    //     />

    //       <p className="answer_wrapper">{movie.overview}</p>

    //   </div>
    //   <h1 className="text-white">{movie.title}</h1>
    // </div>
  );
};

export default MovieCard;

{
  /* <div className="mt-4 flex justify-between"> */
}
{
  /* <Accordion {...movie} /> */
}
{
  /* <p className="mt-1 text-sm text-gray-500">
        {movie.overview}
      </p> */
}
{
  /* </div> */
}
