import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SearchBarItemProps {
  result: any
  clearSearch: any
}

const SearchBarItem: React.FC<SearchBarItemProps> = ({
  result,
  clearSearch,
}) => {
  if (result.media_type === 'movie') {
    return (
      <Link
        href={`/movies/${result.id}`}
        className="relative flex h-fit w-full flex-row justify-between border border-foreground bg-primary p-1 text-primary-foreground"
      >
        <div className="flex flex-row space-x-2">
          <Image
            src={
              result.poster_path
                ? 'https://image.tmdb.org/t/p/w185' + result.poster_path
                : '/blank-profile-picture.png'
            }
            width={30}
            height={45}
            sizes="50vw"
            className="mx-auto h-10 w-8 overflow-hidden rounded after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-50 after:transition-opacity after:delay-100 after:duration-500 after:ease-in "
            alt={result.title}
          />
          <div className="flex flex-col">
            <div>{result.title}</div>
            <div>{result.release_date}</div>
          </div>
        </div>
      </Link>
    )
  } else if (result.media_type === 'tv') {
    return (
      <Link
        href={`/tvseries/${result.id}`}
        className="relative flex h-fit w-full flex-row justify-between border border-foreground bg-primary p-1 text-primary-foreground"
      >
        <div className="flex flex-row space-x-2">
          <Image
            src={
              result.poster_path
                ? 'https://image.tmdb.org/t/p/w185' + result.poster_path
                : '/blank-profile-picture.png'
            }
            width={30}
            height={45}
            sizes="50vw"
            className="mx-auto h-10 w-8 overflow-hidden rounded after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-50 after:transition-opacity after:delay-100 after:duration-500 after:ease-in "
            alt={result.name}
          />
          <div className="flex flex-col">
            <div>{result.name}</div>
            <div>{result.first_air_date}</div>
          </div>
        </div>
      </Link>
    )
  } else if (result.media_type === 'person') {
    return (
      <Link
        href={`/people/${result.id}`}
        className="relative flex h-fit w-full flex-row justify-between border border-foreground bg-primary p-1 text-primary-foreground"
      >
        <div className="flex flex-row space-x-2">
          <Image
            src={
              result.profile_path
                ? 'https://image.tmdb.org/t/p/w185' + result.profile_path
                : '/blank-profile-picture.png'
            }
            width={30}
            height={45}
            sizes="50vw"
            className="mx-auto h-10 w-8 overflow-hidden rounded after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-50 after:transition-opacity after:delay-100 after:duration-500 after:ease-in "
            alt={result.name}
          />
          <div className="flex flex-col">
            <div>{result.name}</div>
            <div>{result.known_for_department}</div>
          </div>
        </div>
      </Link>
    )
  } else {
    return <div> N/A</div>
  }
}

export default SearchBarItem
