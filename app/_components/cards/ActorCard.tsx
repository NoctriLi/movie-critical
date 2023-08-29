import React, { useCallback } from 'react'
// import { useRouter } from "next/router";
import Link from 'next/link'
import LazyImage from '../LazyImage'
import { CastMember } from '@/lib/interfaces'

const ActorCard: React.FC<CastMember> = (castMember) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${castMember.id}`),
  //   [router, castMember.id]
  // );

  return (
    <div className="relative flex h-fit min-w-[100px] flex-col gap-0 rounded text-xs text-white shadow">
      <div className="relative">
        <LazyImage
          src={
            castMember.profile_path
              ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
              : '/blank-profile-picture.png'
          }
          alt={castMember.name}
        />
        <Link
          className="@container absolute bottom-0 left-0 h-full w-full transform bg-black bg-opacity-50 p-4 text-white opacity-0 duration-500 ease-in-out hover:opacity-100"
          href={`/people/${castMember.id}`}
        ></Link>
      </div>
      <div className="flex flex-col py-1">
        <p className="font-bold">{castMember.name}</p>
        <p className="text-[.75rem]">as</p>
        {castMember.character && <p>{castMember.character}</p>}
      </div>
    </div>
  )
}

export default ActorCard
