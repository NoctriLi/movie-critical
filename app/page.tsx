import Image from "next/image";
import React from "react";
import movies from "@/lib/dummy";
import axios from "axios";
import Navbar from "@/app/_components/Navbar";
import Hero from "@/app/_components/Hero";
import MovieSlider from "@/app/_components/MovieSlider";

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

export default async function Page() {
 const movies = await getMovies();
  
  return (
    <>

      <section className="grid grid-cols-1">
        {movies && <Hero {...movies} />}
      </section>

      {movies && <MovieSlider {...movies} />}
    </>
  );
}
