import React, { useEffect } from "react";
import CarouselItem from "./CarouselItem";

import { Movies, Movie } from "@/lib/interfaces";

const Carousel: React.FC<Movies> = (movies) => {
  console.log("CAROUSELITEM", movies);

  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carousel"
      className="relative"
      data-te-carousel-init
      data-te-carousel-slide
      data-te-interval="15000"
      data-te-touch="true"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {movies.results.map((movie: Movie, i) => {
          return (
            <button
              type="button"
              data-te-target="#carousel"
              data-te-slide-to={i}
              {...(i == 0 ? { "data-te-carousel-active": true } : null)}
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label={`Slide ${i + 1}`}
            ></button>
          );
        })}
      </div>

      <div className="relative flex rounded-lg shadow-lg mx-auto w-full overflow-hidden after:clear-both after:block after:content-['']">
        {movies.results.map((movie: Movie) => (
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] hidden ease-in-out motion-reduce:transition-none"
            {...(movie.id == movies.results[0].id
              ? { "data-te-carousel-active": true }
              : null)}
            data-te-carousel-item
          >
            <div className="relative mx-auto w-10/12">
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                className="block w-full"
                alt="..."
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
            <div className="absolute rounded w-3/12 carousel-text top-20 hidden p-5   bg-zinc-800 text-center bg-opacity-50 text-white md:block ">
              <h1 className="text-3xl text-white text-center py-5 left-0 top-20">
                {movie.original_title}
              </h1>
            </div>
            <div className="absolute w-5/12 rounded carousel-text bottom-20 hidden  p-5  bg-zinc-900 text-center bg-opacity-50 text-white md:block ">
              <p className="object-scale-down text-left">{movie.overview}</p>
            </div>
          </div>
        ))}
        {/* <CarouselItem
          image="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
          title="First slide label"
          description="Some representative placeholder content for the first slide."
        />
        <CarouselItem
          image="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
          title="First slide label"
          description="Some representative placeholder content for the first slide."
        />
        <CarouselItem
          image="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
          title="First slide label"
          description="Some representative placeholder content for the first slide."
        /> */}

        {/* <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> */}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carousel"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-50 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carousel"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;
