import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";
import persons from "@/lib/dummy";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    // await serverAuth(req, res);

    const { personId } = req.query;

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
  console.log(person);
    // const persons = await prismadb.person.findUnique({
    //   where: {
    //     id: personId
    //   }
    // });
    res.status(200).json(person);
    return 
    
  } catch (error) {
    console.log(error);
    
    res.status(500).end();
    return 
  }
}
