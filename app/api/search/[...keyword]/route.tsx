import {  NextResponse } from "next/server";
const token = process.env.TMDB_TOKEN;

export async function GET(request: Request, { params }: {params: {keyword: string; page: number}}) {

    const  keyword  = params.keyword[0];
    const page  = params.keyword[1];

    if (typeof keyword !== 'string' || typeof page !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!keyword || !page) {
      throw new Error('Missing required fields');
    }

      let response = await fetch(
   `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    let results = await response.json();
    
      console.log("results", results)
    // const resultss = await prismadb.results.findUnique({
    //   where: {
    //     id: keyword
    //   }
    // });
    
    return NextResponse.json(results);
    
}
