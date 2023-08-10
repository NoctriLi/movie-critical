import {  NextResponse } from "next/server";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export async function GET(request: Request, { params }: {params: {seriesId: string; season: string; episode: string}}) {

    const  seriesId  = params.seriesId[0];
    const season  = params.seriesId[1];
    const episode  = params.seriesId[2];
    if (typeof seriesId !== 'string' || typeof season !== 'string' || typeof episode !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!seriesId || !season || !episode) {
      throw new Error('Missing Id');
    }

      let movRes = await fetch(
   `https://api.themoviedb.org/3/tv/${seriesId}/season/${season}/episode/${episode}?language=en-US`,
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
