import React from "react";
import { Movie } from "@/lib/interfaces";

const MovieCard: React.FC<Movie> = (movie) => {
  return (
    <div
      key={movie.id}
      className="relative min-w-[250px] h-fit bg-white rounded shadow overflow-hidden"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Card"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-full p-4 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100"> 
        <div className="max-h-[75%] overflow-y-auto">
            <p>{movie.overview}</p>
        </div>
        <button className="absolute bottom-0 mt-2 px-4 py-2 bg-blue-500 rounded text-white">
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
