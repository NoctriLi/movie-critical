import React from "react";
import Image from "next/image";
import Link from "next/link";


interface SearchBarItemProps {
    result: any;
    clearSearch: any;
}


const SearchBarItem: React.FC<SearchBarItemProps> = ({result, clearSearch}) => {

    

  if (result.media_type === "movie") {
    console.log("HI", result.poster_path)
    return (
      <Link  href={`/movies/${result.id}`}  className="flex flex-row relative justify-between border bg-primary p-1 text-primary-foreground border-foreground h-fit w-full">
        <div className="flex flex-row space-x-2">
          <Image
            src={result.poster_path ? "https://image.tmdb.org/t/p/w185" + result.poster_path : "/blank-profile-picture.png"}
            width={30}
            height={45}
            sizes="50vw"
            className="h-10 w-8 rounded overflow-hidden mx-auto after:bg-black after:opacity-50 after:absolute after:inset-0 after:z-10 after:transition-opacity after:duration-500 after:ease-in after:delay-100 "
            alt={result.title}
          />
          <div className="flex flex-col">
            <div >{result.title}</div>
            <div >{result.release_date}</div>
          </div>
        </div>
      </Link>
    );
  } else if (result.media_type === "tv") {
    return (
      <Link href={`/tvseries/${result.id}`}  className="flex flex-row relative justify-between border bg-primary p-1 text-primary-foreground border-foreground h-fit w-full">
        <div className="flex flex-row space-x-2">
          <Image
            src={result.poster_path ? "https://image.tmdb.org/t/p/w185" + result.poster_path: "/blank-profile-picture.png"}
            width={30}
            height={45}
            sizes="50vw"
            className="h-10 w-8 rounded overflow-hidden mx-auto after:bg-black after:opacity-50 after:absolute after:inset-0 after:z-10 after:transition-opacity after:duration-500 after:ease-in after:delay-100 "
            alt={result.name}
          />
          <div className="flex flex-col">
            <div >{result.name}</div>
            <div >{result.first_air_date}</div>
          </div>
        </div>
      </Link>
    );
  } else if (result.media_type === "person") {
    return (
      <Link href={`/people/${result.id}`}  className="flex flex-row relative justify-between border bg-primary p-1 text-primary-foreground border-foreground h-fit w-full">
        <div className="flex flex-row space-x-2">
          <Image
            src={result.profile_path ? "https://image.tmdb.org/t/p/w185" + result.profile_path: "/blank-profile-picture.png"}
            width={30}
            height={45}
            sizes="50vw"
            className="h-10 w-8 rounded overflow-hidden mx-auto after:bg-black after:opacity-50 after:absolute after:inset-0 after:z-10 after:transition-opacity after:duration-500 after:ease-in after:delay-100 "
            alt={result.name}
          />
          <div className="flex flex-col">
            <div >{result.name}</div>
            <div >{result.known_for_department}</div>
          </div>
        </div>
      </Link>
    );
  }
  else {
    return <div > N/A</div>;
  }
};

export default SearchBarItem;
