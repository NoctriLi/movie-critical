import React from 'react'
// import { useRouter } from "next/router";
import Link from 'next/link'
import { CastMember } from '@/lib/interfaces'

const ActorCard: React.FC<CastMember> = (castMember) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${castMember.id}`),
  //   [router, castMember.id]
  // );

  return (
    <div className="relative h-fit min-w-[100px] snap-center overflow-hidden rounded shadow">
      <div className="relative">
        <img
          src={
            castMember.profile_path
              ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
              : '/blank-profile-picture.png'
          }
          alt={castMember.name}
          height={300}
          width={200}
          className="object-cover"
          loading="lazy"
          onError={(e) =>
            (e.currentTarget.src = '/public/images/blank-profile-picture.png')
          }
        />
        <Link
          className="@container absolute bottom-0 left-0 h-full w-full transform bg-black bg-opacity-50 p-4 text-white opacity-0 duration-500 ease-in-out hover:opacity-100"
          href={`/people/${castMember.id}`}
        ></Link>
      </div>
      <div className="flex flex-col py-1 text-center">
        <p className="font-bold">{castMember.name}</p>
        <p className="text-[.75rem]">as</p>
        {castMember.character && <p className='text-xs font-semibold tracking-tighter'>{castMember.character}</p>}
      </div>
    </div>
  )
}

export default ActorCard
