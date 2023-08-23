"use client"
import { Movies, Movie } from "@/lib/interfaces";
import MovieCard from "../cards/MovieCard";
import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
interface Props {
  movies: Movies;
}

const MovieSlider: React.FC<Movies> = (movies) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);


  const handlePrev = () => {
    sliderRef.current?.scrollBy((-200), 0)
  };

  const handleNext = () => {
    sliderRef.current?.scrollBy(200, 0)
  };

  return (
    <div className="mx-auto w-full h-full px-4 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute flex h-full w-[100px] top-0 bottom-0 left-0 z-20  bg-opacity-20 bg-black"
      >
        <HiChevronLeft className= "relative mx-auto self-center text-white text-5xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute flex h-full w-[100px] top-0 bottom-0 right-0 z-20  bg-opacity-10 bg-black"
      >
        <HiChevronRight className="relative mx-auto self-center text-white text-5xl shadow" />
      </button>


      <div id="tvslider"
        ref={sliderRef}
 
      className="mt-6 flex scroll-smooth h-[325px] overflow-x-hidden snap-x overflow-y-hidden gap-x-10 py-2">

        {movies.results.map((movie, i) =>
          <MovieCard key={movie.id} {...movie}/> )}
        

      </div>
    </div>



  );
};

export default MovieSlider;
