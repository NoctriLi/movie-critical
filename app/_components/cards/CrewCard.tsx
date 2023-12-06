import React from 'react'
// import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'

interface Image {
  src: string
  width: number
  quality?: number
}

const imageLoader = ({ src, width, quality }: Image) => {
  return `https://example.com/${src}?w=${width}&q=${
    quality || '/blank-profile-picture.png'
  }`
}

const CrewCard: React.FC<any> = (crewMember) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${crewMember.id}`),
  //   [router, crewMember.id]
  // );
  return (
    <div className="relative h-fit min-w-[100px] snap-center overflow-hidden rounded shadow">
      <div className="relative">
        <img
          src={
            crewMember.profile_path
              ? `https://image.tmdb.org/t/p/w500${crewMember.profile_path}`
              : '/blank-profile-picture.png'
          }
          alt={crewMember.name}
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
          href={`/people/${crewMember.id}`}
        ></Link>
      </div>

      <div className="mx-auto flex h-fit w-full flex-col py-2 text-center">
        <p className=" font-bold">{crewMember.name}</p>
        {crewMember && (
          <p className="text-xs font-semibold tracking-tighter">
            {crewMember.job}
          </p>
        )}
      </div>
    </div>
  )
}

export default CrewCard
