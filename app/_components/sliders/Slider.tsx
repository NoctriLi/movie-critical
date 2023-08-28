"use client";
import React, { Fragment, useEffect } from "react";
import { TVShow, Movie } from "@/lib/interfaces";
import TvCard from "../cards/TvCard";
import MovieCard from "../cards/MovieCard";
import MovieCastCard from "../cards/MovieCastCard";
import ActorCard from "../cards/ActorCard";
import CrewCard from "../cards/CrewCard";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

interface Props {
  list: any[];
  type: string;
}

const Slider: React.FC<Props> = ({ list, type }) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    sliderRef.current?.scrollBy(-200, 0);
  };

  const handleNext = () => {
    sliderRef.current?.scrollBy(200, 0);
  };
  useEffect(() => {
    sliderRef.current?.scrollBy(200, 0);
  });

  return (
    <div className="relative flex mx-auto object-scale-down w-full h-full bg-zinc-900 px-4 sm:px-6 lg:max-w-7xl lg:px-8 border-y-8 rounded border-zinc-800 overflow-hidden ">
      <button
        onClick={handlePrev}
        className="absolute flex h-full w-1/4 top-0 bottom-0 left-0 z-20  bg-opacity-20 bg-black hover:bg-opacity-50"
      >
        <HiChevronLeft className="relative mx-auto self-center text-white text-5xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute flex h-full w-1/4 top-0 bottom-0 right-0 z-20  bg-opacity-20 bg-black hover:bg-opacity-50"
      >
        <HiChevronRight className="relative mx-auto self-center text-white text-5xl shadow" />
      </button>

      <div
        id="tvslider"
        ref={sliderRef}
        className="mt-6 flex scroll-smooth h-[325px] overflow-x-hidden snap-x overflow-y-hidden gap-x-10 px-[25%] py-2"
      >
        {type === "movie"
          ? list.map((movie, i) => (
              <Fragment key={i}>
                <div className="relative bg-zinc-600 h-full rounded p-1"></div>
                <MovieCard key={movie.id} {...movie} />
              </Fragment>
            ))
          : type === "tv"
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative bg-zinc-600 h-full rounded p-1"></div>
                <TvCard  {...show} />
              </Fragment>
            ))
          : type === "crew"
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative bg-zinc-600 h-full rounded p-1"></div>
                <CrewCard  {...show} />
              </Fragment>
            ))
          : type === "cast"
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative bg-zinc-600 h-full rounded p-1"></div>
                <ActorCard  {...show} />
              </Fragment>
            ))
          : type === "moviecast"
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative bg-zinc-600 h-full rounded p-1"></div>
                <MovieCastCard  {...show} />
              </Fragment>
            ))
          : null}
      </div>
    </div>
  );
};

export default Slider;
