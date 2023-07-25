import Image from "next/image";
import React from "react";

import axios from "axios";

interface HomeProps {
  movies: {
    results: any[];
  };
}

const token = process.env.TMDB_TOKEN;
export async function getServerSideProps() {
  const movies = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return {
    props: {
      movies: movies.data,
    },
  };
}

export default function Home({ movies }: HomeProps) {
  console.log(movies);

  return (
    <>
      <h1 className="text-white">Home</h1>
      <div className="flex gap-4 p-4 flex-wrap ">
        {movies.results.map((movie) => {
          return (
            <div className="flex flex-col border w-40 p-4">
                <div key={movie.id}>
                <h1 className="text-white text-lg m-3">{movie.title}</h1>
                <p className="text-white text-sm">{movie.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
