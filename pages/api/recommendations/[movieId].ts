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
    console.log("MOVIE ID", movieId)
    if (typeof movieId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!movieId) {
      throw new Error('Missing Id');
    }

      let movie = await axios.get(
   `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    movie = movie.data;
    console.log("RECOMMENDATIONS API", movie);
    // const movies = await prismadb.movie.findUnique({
    //   where: {
    //     id: movieId
    //   }
    // });
    res.status(200).json(movie);
    return 
    
  } catch (error) {
    console.log(error);
    
    res.status(500).end();
    return 
  }
}