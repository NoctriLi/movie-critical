import React, { useCallback } from "react";
import { useRouter } from "next/router";
import LazyImage from "./LazyImage";
import { Movie } from "@/lib/interfaces";

const MovieCard: React.FC<Movie> = (movie) => {
  const router = useRouter();

  const redirectToSummary = useCallback(
    () => router.push(`/movies/${movie.id}`),
    [router, movie.id]
  );
    if(!movie.poster_path) return (<div></div>)
  return (
    <div className="relative flex flex-col min-w-[150px] w-[150px] h-fit text-white rounded shadow overflow-hidden">
      <LazyImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        
      />
      <p className="py-2 text-sm">{movie.character?movie.character:movie.job}</p>
      <div className="@container absolute bottom-0 left-0 w-full h-full p-3 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100">
        <div className="max-h-[75%] overflow-y-auto text-[.7rem]">
          <p>{movie.overview}</p>
        </div>
        <button
          onClick={redirectToSummary}
          className="absolute bottom-0 mt-2 px-4 py-2 bg-blue-500 rounded text-white"
        >
          More!
        </button>
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
