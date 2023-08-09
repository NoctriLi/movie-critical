import {  NextResponse } from "next/server";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export async function GET(request: Request, { params }: {params: {personId: string}}) {
    const  personId  = params.personId;

    if (typeof personId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!personId) {
      throw new Error('Missing Id');
    }
    console.log(personId);
      let person = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}?append_to_response=movie_credits&language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
  person = person.data;

    // const persons = await prismadb.person.findUnique({
    //   where: {
    //     id: personId
    //   }
    // });
    
    return NextResponse.json(person);
    

}
