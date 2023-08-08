import { PersonMovies } from "@/lib/interfaces";
import MovieCastCard from "./MovieCastCard";



const MovieSlider = (movies: PersonMovies) => {
  //  const arr = Object.values(movies);
  //  console.log("ARR", arr)
  //   console.log(movies)
  const cast = movies.cast;
  const crew = movies.crew;



  return (
    <div className="flex flex-col w-full  mx-auto">
      <h2 className=" text-2xl font-bold tracking-tight text-center text-white py-2 ">
        Credits
      </h2>
      <div className="flex flex-col lg:flex-row text-center gap-28 mx-auto">


        <div className="max-w-[500px] h-full flex flex-col ">
          <h3 className="text-xl font-bold tracking-tight text-white ">Cast</h3>
          <div className=" space-x-5 w-full align-middle justify-center ">
            <div className="mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="slider">
                {cast.map((movie) => (
                  <MovieCastCard key={movie.id} {...movie} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[500px] h-full flex flex-col ">
          <h3 className="text-xl font-bold tracking-tight text-white ">Crew</h3>
          <div className=" space-x-5 w-full align-middle justify-center ">
            <div className="mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="slider">
                {crew.map((movie) => (
                  <MovieCastCard key={movie.id} {...movie} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieSlider;

{
  /* <div className="mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
 
      <div className="slider">

        {cast.map(movie =>
          <MovieCastCard key={movie.id} {...movie}/> )}
      </div>

    </div>
      <div className="slider">

        {crew.map(movie =>
          <MovieCastCard key={movie.id} {...movie}/> )}
      </div> */
}
