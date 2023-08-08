
import { Movies, Movie } from "@/lib/interfaces";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movies;
}

const MovieSlider: React.FC<Movies> = (movies) => {
  return (
    <div className="mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
 
      <div className="slider">

        {movies.results.map((movie, i) =>
          <MovieCard key={movie.id} {...movie}/> )}
        

      </div>
    </div>



  );
};

export default MovieSlider;
