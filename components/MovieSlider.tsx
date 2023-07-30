
import { Movies, Movie } from "@/lib/interfaces";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movies;
}

const MovieSlider: React.FC<Movies> = (movies) => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
 
      <div className="slider">

        {movies.results.map(movie =>
          <MovieCard key={movie.id} {...movie}/> )}
        

      </div>
    </div>



  );
};

export default MovieSlider;
