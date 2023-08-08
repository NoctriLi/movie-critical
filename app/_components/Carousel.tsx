import React, { useState } from "react";
import { Movie, Movies } from "@/lib/interfaces";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
interface CarouselProps {
  movies: Movie[];
}

const Carousel: React.FC<Movies> = (movies) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((oldIndex) =>
      oldIndex === 0 ? movies.results.length - 1 : oldIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((oldIndex) =>
      oldIndex === movies.results.length - 1 ? 0 : oldIndex + 1
    );
  };

  return (
    <div className="relative flex  px-12 ">
      <div
        onClick={handlePrev}
        className="absolute flex  h-full w-[50vw] top-0 left-0 z-20"
      >
        <HiChevronLeft className="absolute top-[50%] text-white text-5xl flex" />
      </div>
      <div
        onClick={handleNext}
        className="absolute w-[50vw] h-full top-0 left-[50vw] flex justify-end z-20"
      >
        <HiChevronRight className="absolute top-[50%] text-white text-5xl " />
      </div>
      <div className="flex-1 flex py-2 items-center flex-col sm:overflow-y-auto lg:flex-row @container">
        <img
          src={
            "https://image.tmdb.org/t/p/w500" +
            movies.results[activeIndex].backdrop_path
          }
          alt={movies.results[activeIndex].title}
          className=" h-[40vh]  lg:w-[50vw]  object-cover"
        />
        <div className="flex flex-col ml-4 py-2 text-xs sm:text-base text-white h-[50vh] lg:h-[50%]">
          <h2 className="text-xl  font-bold ">
            {movies.results[activeIndex].title}
          </h2>
          <p>{movies.results[activeIndex].overview}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {movies.results.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1  rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
