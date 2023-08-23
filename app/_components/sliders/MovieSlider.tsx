
import { Movies, Movie } from "@/lib/interfaces";
import MovieCard from "../cards/MovieCard";

interface Props {
  movies: Movies;
}

const MovieSlider: React.FC<Movies> = (movies) => {
  return (
    <div className="mx-auto w-full h-full px-4 sm:px-6 lg:max-w-7xl lg:px-8">
 
      <div className="mt-6 flex scroll-smooth h-[325px] overflow-x-clip overflow-y-hidden gap-x-10 py-2">

        {movies.results.map((movie, i) =>
          <MovieCard key={movie.id} {...movie}/> )}
        

      </div>
    </div>



  );
};

export default MovieSlider;
