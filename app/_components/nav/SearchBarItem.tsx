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
      <Link  href={`/movies/${result.id}`}  className="flex flex-row relative justify-between border border-black h-fit w-full">
        <div className="flex flex-row">
          <Image
            src={result.poster_path ? "https://image.tmdb.org/t/p/w185" + result.poster_path : "/blank-profile-picture.png"}
            width={30}
            height={45}
            sizes="50vw"
            className="h-10 w-8 rounded overflow-hidden mx-auto after:bg-black after:opacity-50 after:absolute after:inset-0 after:z-10 after:transition-opacity after:duration-500 after:ease-in after:delay-100 "
            alt={result.title}
          />
          <div className="flex flex-col">
            <div className="text-black">{result.title}</div>
            <div className="text-black">{result.release_date}</div>
          </div>
        </div>
      </Link>
    );
  } else if (result.media_type === "tv") {
    return (
      <Link href={`/tvseries/${result.id}`}  className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            src={result.poster_path ? "https://image.tmdb.org/t/p/w185" + result.poster_path: "/blank-profile-picture.png"}
            width={30}
            height={45}
            sizes="50vw"
            className="h-10 w-8 rounded overflow-hidden mx-auto after:bg-black after:opacity-50 after:absolute after:inset-0 after:z-10 after:transition-opacity after:duration-500 after:ease-in after:delay-100 "
            alt={result.name}
          />
          <div className="flex flex-col">
            <div className="text-black">{result.name}</div>
            <div className="text-black">{result.first_air_date}</div>
          </div>
        </div>
      </Link>
    );
  } else if (result.media_type === "person") {
    return (
      <Link href={`/people/${result.id}`}  className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            src={result.profile_path ? "https://image.tmdb.org/t/p/w185" + result.profile_path: "/blank-profile-picture.png"}
            width={30}
            height={45}
            sizes="50vw"
            className="h-10 w-8 rounded overflow-hidden mx-auto after:bg-black after:opacity-50 after:absolute after:inset-0 after:z-10 after:transition-opacity after:duration-500 after:ease-in after:delay-100 "
            alt={result.name}
          />
          <div className="flex flex-col">
            <div className="text-black">{result.name}</div>
            <div className="text-black">{result.known_for_department}</div>
          </div>
        </div>
      </Link>
    );
  }
  else {
    return <div className="text-black"> N/A</div>;
  }
};

export default SearchBarItem;
