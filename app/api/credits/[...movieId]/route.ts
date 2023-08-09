import {  NextResponse } from "next/server";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export async function GET(request: Request, { params }: {params: {movieId: string; type: string}}) {

    const  movieId  = params.movieId[0];
    const type = params.movieId[1]
    if (typeof movieId !== 'string') {
      throw new Error('Invalid Id');
    }
    console.log("MOVIE ID", movieId);
    console.log("TYPE", type);
    if (!movieId) {
      throw new Error('Missing Id');
    }

    let credits;
    if(type === "movie"){
      credits = await fetch(
   `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    }else if(type === "tv"){
      credits = await fetch(
    `https://api.themoviedb.org/3/tv/${movieId}/credits`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )  
    }else{
      throw new Error("Invalid type");
    }
    credits = await credits.json();

    // const movies = await prismadb.movie.findUnique({
    //   where: {
    //     id: movieId
    //   }
    // });

    return NextResponse.json(credits);
    
}
