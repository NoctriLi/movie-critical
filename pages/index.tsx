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
export async function getServerSideProps() {
  let movies = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  movies = movies.data

  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }: any) {

  
  return (
    <>

      <section className="grid grid-cols-1">
        <Hero {...movies} />
      </section>

      <MovieSlider {...movies} />
    </>
  );
}
