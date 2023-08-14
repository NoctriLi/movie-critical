import Image from "next/image";
import React from "react";
import movies from "@/lib/dummy";
import axios from "axios";
import Navbar from "@/app/_components/Navbar";
import Hero from "@/app/_components/Hero";
import MovieSlider from "@/app/_components/sliders/MovieSlider";
import TvSlider from "@/app/_components/sliders/TvSlider";
import { Movies, Movie } from "@/lib/interfaces";
import { get } from "lodash";

const token = process.env.TMDB_TOKEN;
async function getMovies() {
  let res = await fetch(
    "https://api.themoviedb.org/3/discover/movie",
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

      <section className="grid grid-cols-1">
        {movies && <Hero {...movies} />}
      </section>

      {movies && <MovieSlider {...movies} />}
      {tvSeries && <TvSlider {...tvSeries} />}
    </>
  );
}
