import Image from "next/image";
import React from "react";
import movies from "@/lib/dummy";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MovieSlider from "@/components/MovieSlider";

import { Movies, Movie } from "@/lib/interfaces";
import { get } from "lodash";

const token = process.env.TMDB_TOKEN;
export async function getServerSideProps() {
  // const movies = await axios.get(
  //   "https://api.themoviedb.org/3/discover/movie",
  //   {
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  // );
  console.log("GETTIN", movies);
  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }: any) {
  console.log("INDEX", movies);

  return (
    <>
      <section className="pb-20 z-100">
        <Navbar />
      </section>
      <section className="grid grid-cols-1">
        <Hero {...movies} />
      </section>

      <MovieSlider {...movies} />
    </>
  );
}
