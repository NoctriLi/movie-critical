import { NextResponse } from "next/server";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export async function GET(
  request: Request,
  { params }: { params: { movieId: string; type: string } }
) {
  // await serverAuth(req, res);

  const movieId = params.movieId[0];
  const type = params.movieId[1]
  console.log("MOVIE ID", movieId);
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
    res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else if (type === "tv") {
    res = await axios.get(
      `https://api.themoviedb.org/3/tv/${movieId}/recommendations?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else {
    throw new Error("Invalid type");
  }

  res = res.data;
  console.log(res);
  // const movies = await prismadb.movie.findUnique({
  //   where: {
  //     id: movieId
  //   }
  // });

  return NextResponse.json(res);
}
