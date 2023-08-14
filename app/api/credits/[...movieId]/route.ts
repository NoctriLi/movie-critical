import { NextResponse } from "next/server";
const token = process.env.TMDB_TOKEN;

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      movieId: string;
      type: string;
      season: string | undefined;
      episode: string | undefined;
    };
  }
) {
  const movieId = params.movieId[0];
  const type = params.movieId[1];
  if (typeof movieId !== "string") {
    throw new Error("Invalid Id");
  }
  console.log("MOVIE ID", movieId);
  console.log("TYPE", type);
  if (!movieId) {
    throw new Error("Missing Id");
  }

  let credits;
  if (type === "movie") {
    credits = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else if (type === "tv") {
    credits = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else if (type === "season") {
    const season = params.movieId[2];
    if (!season) {
      throw new Error("Missing Id");
    }
    if (typeof season !== "string") {
      throw new Error("Invalid Id");
    }
    credits = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/season/${season}/credits?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else if (type === "episode") {
    const season = params.movieId[2];
    const episode = params.movieId[3];
    if (!episode || !season) {
      throw new Error("Missing Id");
    }
    if (typeof episode !== "string" || typeof season !== "string") {
      throw new Error("Invalid Id");
    }
    credits = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/season/${season}/episode/${episode}/credits?language=en-US`,
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

  if (!credits.ok) {
    throw new Error(`API call failed with status ${credits.status}`);
  }

  const creditsJson = await credits.json();

  return NextResponse.json({creditsJson});
}
