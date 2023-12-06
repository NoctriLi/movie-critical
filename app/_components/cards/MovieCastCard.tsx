import React from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CastMovie, CrewMovie } from "@/lib/interfaces";

const isCastMovie = (movie: CastMovie | CrewMovie): movie is CastMovie => {
  return (movie as CastMovie).character !== undefined;
};

const cardStyles = {
  card: 'relative min-w-[175px] h-fit bg-white rounded shadow overflow-hidden snap-center',
  titleBox:
      'min-w-[175px] h-[262px] object-cover bg-gray-400 flex items-center',
  title: 'w-full text-center font-bold',
  hoverBox:
      '@container absolute bottom-0 left-0 w-full h-full pe-3 py-2 bg-black bg-opacity-70 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100',
  overviewText: 'w-full p-3 h-full text-[.7rem] font-bolder',
}


const MovieCard = (movie: CastMovie | CrewMovie) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/movies/${movie.id}`),
  //   [router, movie.id]
  // );
  if (!movie.poster_path) return <div></div>;
  return (
    <div className='relative min-w-[175px] h-fit  rounded shadow overflow-hidden snap-center'>
            {movie.poster_path != undefined ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    height={300}
                    width={200}
                    className="object-cover"
                    loading="lazy"
                    onError={(e) =>
                        (e.currentTarget.src =
                            '/public/images/blank-profile-picture.png')
                    }
                />
            ) : (
                <div className={cardStyles.titleBox}>
                    <h1 className={cardStyles.title}>{movie.title}</h1>
                </div>
            )}


      <p className="text-[.75rem] text-center mx-auto">as</p>

      <p className="pb-2 text-sm font-bold text-center mx-auto">
        {isCastMovie(movie) ? movie.character : movie.job}
      </p>

      <Link prefetch={false} href={`/movies/${movie.id}`} className={cardStyles.hoverBox}>
                <ScrollArea className={cardStyles.overviewText}>

                    {movie.overview}
                </ScrollArea>
            </Link>

      </div>
    // <div className="card flex">

    //   <div
    //     key={movie.id}
    //     className=" relative w-fit overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
    //   >
    //     <img
    //       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //       alt={movie.title}
    //       className="h-full w-full  min-w-[200px] object-center lg:h-full lg:w-full"
    //     />

    //       <p className="answer_wrapper">{movie.overview}</p>

    //   </div>
    //   <h1 className="text-white">{movie.title}</h1>
    // </div>
  );
};

export default MovieCard;

{
  /* <div className="mt-4 flex justify-between"> */
}
{
  /* <Accordion {...movie} /> */
}
{
  /* <p className="mt-1 text-sm text-gray-500">
        {movie.overview}
      </p> */
}
{
  /* </div> */
}
