import React, { useCallback } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/lib/interfaces";

const MovieCard: React.FC<Movie> = (movie) => {
  const card = "relative min-w-[175px] h-fit bg-white rounded shadow overflow-hidden snap-center";
  const titleBox = "min-w-[175px] h-[262px] object-cover bg-gray-400 flex items-center";
  const title = "w-full text-center font-bold";
  const hoverBox = "@container absolute bottom-0 left-0 w-full h-full p-3 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100";
  const overviewText = "max-h-[75%] overflow-y-auto text-[.7rem] font-bolder";

  return (
    <div className={card}>
      {movie.poster_path != undefined ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          height={300}
          width={200}
          className="object-cover"
          loading="lazy"
          onError={(e) =>
            (e.currentTarget.src = "/public/images/blank-profile-picture.png")
          }
        />
      ) : (
        <div className={titleBox}>
          <h1 className={title}>{movie.title}</h1>
        </div>
      )}
      <Link href={`/movies/${movie.id}`} className={hoverBox}>
        <div className={overviewText}>
          <p>{movie.overview}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
