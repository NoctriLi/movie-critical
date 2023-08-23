import React from "react";

import MovieSlider from "@/app/_components/sliders/MovieSlider";
import TvSlider from "@/app/_components/sliders/TvSlider";
import NowPlayingCourosel from "./_components/NowPlayingCarousel/NowPlayingCarousel";

const token = process.env.TMDB_TOKEN;
async function getMovies() {
  let res = await fetch("https://api.themoviedb.org/3/discover/movie", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return data;
}
async function getCurrentTVSeries() {
  let res = await fetch(
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return data;
}

export default async function Page() {
  const movies = await getMovies();
  const tvSeries = await getCurrentTVSeries();

  return (
    <>
      <section className="flex flex-col w-full min-h-[90vh] my-5 ">
        <h1 className="text-white text-5xl mx-10 text-left">Now Playing</h1>
        {movies && <NowPlayingCourosel {...movies} />}
      </section>

      <section className="relative flex space-x-5 items-center h-screen w-screen text-white p-5">
        <div className="relative flex flex-col w-1/2 overflow-hidden border-8 rounded border-zinc-800">
          <h1 className="mx-auto">Movies</h1>

          {movies && <MovieSlider {...movies} />}
        </div>
        <div className="relative flex flex-col w-1/2 overflow-hidden border-8 rounded border-zinc-800">
          <h1 className="mx-auto">TV Series</h1>

          {tvSeries && <TvSlider {...tvSeries} />}
        </div>
      </section>
    </>
  );
}
