import {  NextResponse } from "next/server";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export async function GET(request: Request, { params }: {params: {movieId: string}}) {


    // await serverAuth(req, res);

    const  movieId  = params.movieId;

    if (typeof movieId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!movieId) {
      throw new Error('Missing Id');
    }

      let movRes = await fetch(
   `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=release_dates`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    let movie = await movRes.json();
    
      console.log("MOVIE", movie)
    // const movies = await prismadb.movie.findUnique({
    //   where: {
    //     id: movieId
    //   }
    // });
    
    return NextResponse.json(movie);
    
}
