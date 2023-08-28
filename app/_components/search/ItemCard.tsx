import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const twoDecimals = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

const capFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const stringLimit = (str: string) => {
  return str.length > 100 ? str.substring(0, 200) + '...' : str
}

const ItemCard = ({ item, searchType }: { item: any; searchType: String }) => {
  let url = '/'

  console.log(searchType)
  let media_type = item.media_type ? item.media_type : searchType
  if (media_type === 'people') media_type = 'person'

  if (media_type === 'person') {
    url += `people/${item.id}`
  } else if (media_type === 'movie') {
    url += `movies/${item.id}`
  } else if (media_type === 'tv') {
    url += `tvseries/${item.id}`
  }

  console.log(media_type)

  return (
    <Link
      href={url}
      className="relative mx-2 my-2 flex h-[400px] w-[300px] flex-col rounded border-8 bg-card p-2 shadow "
    >
      <div className="relative flex h-40 rounded">
        <Image
          src={
            item.profile_path
              ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
              : item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : '/blank-profile-picture.png'
          }
          loading="lazy"
          width={100}
          height={150}
          alt="poster"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = '/blank-profile-picture.png'
          }}
          className="min-h-[150px] max-w-[100px] rounded bg-black  object-contain shadow"
        />
      </div>
      <div className="relative flex h-full w-full min-w-[100px] flex-col place-content-evenly rounded text-xs text-card-foreground">
        {media_type === 'person' && (
          <>
            <div className="relative flex flex-col place-self-start">
              <div className="flex w-full flex-row py-1">
                {item.known_for_department && (
                  <p className="text-[.75rem]">{item.known_for_department}</p>
                )}
              </div>
              {item.name && (
                <h1
                  className=" text-xl leading-tight"
                  style={{
                    fontSize: `clamp(.7rem, calc(1rem + 1vw - ${
                      item.name.split(' ').length * 0.17
                    }rem), 1.5rem)`,
                  }}
                >
                  {item.name}
                </h1>
              )}

              <div className="flex flex-col py-1">
                <p className="text-[.75rem]">
                  <span className="font-bold">Popularity: </span>
                  {item.popularity && twoDecimals(item.popularity)}
                </p>
              </div>
            </div>
            <div className="relative h-32 p-3"></div>
          </>
        )}
        {media_type === 'movie' && (
          <>
            <div className="relative flex h-fit w-full flex-col">
              <p className="text-[.75rem]">{capFirst(media_type)}</p>
              <div className="block w-full  px-2  ">
                {item.title && (
                  <h1
                    className=" text-xl leading-tight"
                    style={{
                      fontSize: `clamp(.7rem, calc(1rem + 1vw - ${
                        item.title.split(' ').length * 0.17
                      }rem), 1.5rem)`,
                    }}
                  >
                    {item.title}
                  </h1>
                )}
              </div>

              <div className="flex flex-col py-1">
                <p className="text-[.75rem]">
                  <span className="font-bold">Popularity: </span>
                  {item.popularity && twoDecimals(item.popularity)}
                </p>
              </div>
            </div>

            <div className="relative h-32 overflow-hidden rounded bg-primary p-3 text-primary-foreground font-bolder shadow shadow-muted">
              <p>{(item.overview && stringLimit(item.overview)) || 'N/A'}</p>
            </div>
          </>
        )}
        {media_type === 'tv' && (
          <>
            <div className="relative flex flex-col ">
              <p className="text-[.75rem]">{capFirst(media_type)}</p>
              {item.name && (
                <h1
                  className=" text-xl leading-tight"
                  style={{
                    fontSize: `clamp(.7rem, calc(1rem + 1vw - ${
                      item.name.split(' ').length * 0.17
                    }rem), 1.5rem)`,
                  }}
                >
                  {item.name}
                </h1>
              )}

              <div className="flex flex-col py-1">
                <p className="text-[.75rem]">
                  <span className="font-bold">Popularity: </span>
                  {item.popularity && twoDecimals(item.popularity)}
                </p>
              </div>
            </div>
            <div className="relative h-32 overflow-hidden rounded bg-primary p-3 text-primary-foreground font-bolder shadow shadow-muted">
              <p>{(item.overview && stringLimit(item.overview)) || 'N/A'}</p>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}
export default ItemCard
