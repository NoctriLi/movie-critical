import { Movie } from "@/lib/interfaces"




const CarouselItem: React.FC<Movie> = (movie) => {
  return (
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] hidden ease-in-out motion-reduce:transition-none"
      
      data-te-carousel-item
    >
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="block w-full" alt="..." />
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-xl">{movie.original_title}</h5>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
