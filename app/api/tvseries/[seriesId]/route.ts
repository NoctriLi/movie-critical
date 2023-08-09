import {  NextResponse } from "next/server";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export async function GET(request: Request, { params }: {params: {seriesId: string}}) {

    const  seriesId  = params.seriesId;

    if (typeof seriesId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!seriesId) {
      throw new Error('Missing Id');
    }

      let movRes = await fetch(
   `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    let series = await movRes.json();
    
      console.log("series", series)
    // const seriess = await prismadb.series.findUnique({
    //   where: {
    //     id: seriesId
    //   }
    // });
    
    return NextResponse.json(series);
    
}
