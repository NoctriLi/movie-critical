import {  NextResponse } from "next/server";
const token = process.env.TMDB_TOKEN;

export async function GET(request: Request, { params }: {params: { type: string; keyword: string; page: number;}}) {
    const type = params.keyword[0];
    const  keyword  = params.keyword[1];
    const page  = params.keyword[2];
    let typeSlug;
    if (type === 'all') {
      typeSlug = 'multi';
    } else if (type === 'movie') {
      typeSlug = 'movie';
    } else if (type === 'tv') {
      typeSlug = 'tv';
    } else if (type === 'people') {
      typeSlug = 'person';
    } else {
      throw new Error(`Invalid type ${type}` );
    }
    if (typeof keyword !== 'string' || typeof page !== 'string' || typeof type !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!keyword || !page || !type) {
      throw new Error('Missing required fields');
    }
    console.log("keyword", keyword)
    console.log("page", page)
    console.log("type", typeSlug)




      let response = await fetch(
   `https://api.themoviedb.org/3/search/${typeSlug}?query=${keyword}&include_adult=false&language=en-US&page=${page}`,
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
