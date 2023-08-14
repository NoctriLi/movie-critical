import { NextResponse } from "next/server";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export async function GET(
  request: Request,
  { params }: { params: { movieId: string; type: string } }
) {
  // await serverAuth(req, res);
  if(params.movieId.length !== 2) {
    throw new Error("Invalid Id");
  }

  const movieId = params.movieId[0];
  const type = params.movieId[1]
  console.log("MOVIE ID", movieId);
  console.log("TYPE", type);
  if (typeof movieId !== "string") {
    throw new Error("Invalid Id");
  }

  if (!type) {
    throw new Error("Missing type");
  }
  if (typeof type !== "string") {
    throw new Error("Invalid type");
  }
  if (!movieId) {
    throw new Error("Missing Id");
  }
  let res;
  if (type === "movie") {
    res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else if (type === "tv") {
    res = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/recommendations?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else {
    throw new Error("Invalid type");
  }

  let rec = await res.json();
  console.log(rec);
  // const movies = await prismadb.movie.findUnique({
  //   where: {
  //     id: movieId
  //   }
  // });

  return NextResponse.json(rec);
}
