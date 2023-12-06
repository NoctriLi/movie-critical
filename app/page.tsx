import React from "react";

import Slider from "@/app/_components/sliders/Slider";

import NowPlayingCourosel from "./_components/NowPlayingCarousel/NowPlayingCarousel";



const token = process.env.TMDB_TOKEN;
async function getMovies() {
  let res = await fetch("https://api.themoviedb.org/3/discover/movie", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
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
      cache: "no-store",
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
      <section className="flex flex-col w-full h-fit my-5 ">
        <h1 className="text-foreground text-5xl mx-auto text-left">Now Playing</h1>
        {movies && <NowPlayingCourosel {...movies} />}
      </section>

      <section className="relative flex flex-wrap items-center h-screen w-screen text-foreground p-5">
        <div className="relative flex flex-col w-fit mx-auto overflow-hidden ">
          <h1 className="mx-auto text-2xl">Movies</h1>

          {movies && <Slider list={movies.results} type={"movie"} />}
        </div>
        <div className="relative flex flex-col w-fit mx-auto overflow-hidden">
          <h1 className="mx-auto text-2xl">TV Series</h1>

          {tvSeries && <Slider list={tvSeries.results} type={"tv"} />}
        </div>
      </section>
    </>
  );
}
