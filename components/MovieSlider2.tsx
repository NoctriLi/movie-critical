import Carousel from "./carousel/Carousel";

import { Movies, Movie } from "@/lib/interfaces";

interface Props {
  movies: Movies;
}

const MovieSlider: React.FC<Movies> = (movies) => {
  return (
    <div className="flex gap-4 p-4 flex-wrap ">
      <div className="bg-zinc-900">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Find a movie
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {movies.results.map((movie: Movie) => {
              return (
                <div className="group relative">
                  <div
                    key={movie.id}
                    
                    className="aspect-h-1 aspect-w-1 w-fit overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-md text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {movie.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {movie.overview}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


