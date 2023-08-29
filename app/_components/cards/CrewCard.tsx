import React, { useCallback } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface Image {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: Image) => {
  return `https://example.com/${src}?w=${width}&q=${
    quality || "/blank-profile-picture.png"
  }`;
};

const CrewCard: React.FC<any> = (crewMember) => {
  // const router = useRouter();

  // const redirectToSummary = useCallback(
  //   () => router.push(`/people/${crewMember.id}`),
  //   [router, crewMember.id]
  // );
  return (
    <div className='relative min-w-[100px] h-fit rounded shadow overflow-hidden snap-center'>
      <div className="relative">
        <Image
          src={
            crewMember.profile_path
              ? `https://image.tmdb.org/t/p/w500${crewMember.profile_path}`
              : "/blank-profile-picture.png"
          }
          alt={crewMember.name}
          height={300}
                    width={200}
                    className="object-cover"
                    loading="lazy"
                    onError={(e) =>
                        (e.currentTarget.src =
                            '/public/images/blank-profile-picture.png')
                    }
                
        />
        <Link className="@container absolute bottom-0 left-0 w-full h-full p-4 bg-black bg-opacity-50 opacity-0 text-white transform ease-in-out duration-500 hover:opacity-100"
            href={`/people/${crewMember.id}`}>
            
            
        </Link>
      </div>

      <div className="flex flex-col w-full h-fit py-2 mx-auto text-center">
        <p className=" font-bold">{crewMember.name}</p>
        {crewMember && <p className='text-xs font-semibold tracking-tighter'>{crewMember.job}</p>}
      </div>
    </div>
  );
};

export default CrewCard;
