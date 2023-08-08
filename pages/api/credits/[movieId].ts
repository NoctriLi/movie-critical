import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";
import movies from "@/lib/dummy";
import axios from "axios";
const token = process.env.TMDB_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    // await serverAuth(req, res);
    
    const { movieId } = req.query;
    if (typeof movieId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!movieId) {
      throw new Error('Missing Id');
    }

      let credits = await axios.get(
   `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    credits = credits.data;

    // const movies = await prismadb.movie.findUnique({
    //   where: {
    //     id: movieId
    //   }
    // });
    res.status(200).json(credits);
    return 
    
  } catch (error) {
    console.log(error);
    
    res.status(500).end();
    return 
  }
}
