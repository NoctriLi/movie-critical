'use client'
import React, { Fragment, useEffect } from 'react'
import { TVShow, Movie } from '@/lib/interfaces'
import TvCard from '../cards/TvCard'
import MovieCard from '../cards/MovieCard'
import MovieCastCard from '../cards/MovieCastCard'
import ActorCard from '../cards/ActorCard'
import CrewCard from '../cards/CrewCard'
import SeasonCard from '../cards/SeasonCard'
import EpisodeCard from '../cards/EpisodeCard'
import { HiChevronLeft } from 'react-icons/hi'
import { HiChevronRight } from 'react-icons/hi'

interface Props {
  list: any[]
  type: string
  id?: string
}

const Slider: React.FC<Props> = ({ list, type, id }) => {
  const sliderRef = React.useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    sliderRef.current?.scrollBy(-200, 0)
  }

  const handleNext = () => {
    sliderRef.current?.scrollBy(200, 0)
  }
  useEffect(() => {
    sliderRef.current?.scrollBy(200, 0)
  })

  return (
    <div className="relative mx-auto flex h-full w-full overflow-hidden rounded border-y-8 border-zinc-800 bg-secondary object-scale-down px-4 shadow-secondary-foreground sm:px-6 lg:max-w-7xl lg:px-8 ">
      <button
        onClick={handlePrev}
        className="absolute bottom-0 left-0 top-0 z-20 flex h-full w-1/4  bg-black bg-opacity-30 hover:bg-opacity-50"
      >
        <HiChevronLeft className="relative mx-auto self-center text-5xl text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute bottom-0 right-0 top-0 z-20 flex h-full w-1/4  bg-black bg-opacity-30 hover:bg-opacity-50"
      >
        <HiChevronRight className="relative mx-auto self-center text-5xl text-white shadow" />
      </button>

      <div
        id="tvslider"
        ref={sliderRef}
        className="mt-6 flex h-[325px] snap-x gap-x-10 overflow-x-hidden overflow-y-hidden scroll-smooth px-[25%] py-2"
      >
        {type === 'movie'
          ? list.map((movie, i) => (
              <Fragment key={i}>
                <div className="relative h-full rounded bg-secondary-foreground p-1"></div>
                <MovieCard key={movie.id} {...movie} />
              </Fragment>
            ))
          : type === 'tv'
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative h-full rounded bg-secondary-foreground p-1"></div>
                <TvCard {...show} />
              </Fragment>
            ))
          : type === 'crew'
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative h-full rounded bg-secondary-foreground p-1"></div>
                <CrewCard {...show} />
              </Fragment>
            ))
          : type === 'cast'
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative h-full rounded bg-secondary-foreground p-1"></div>
                <ActorCard {...show} />
              </Fragment>
            ))
          : type === 'moviecast'
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative h-full rounded bg-secondary-foreground p-1"></div>
                <MovieCastCard {...show} />
              </Fragment>
            ))
          : type === 'season'
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative h-full rounded bg-secondary-foreground p-1"></div>
                <SeasonCard {...show} id={id} />
              </Fragment>
            ))
          : type === 'episode'
          ? list.map((show, i) => (
              <Fragment key={i}>
                <div className="relative h-full rounded bg-secondary-foreground p-1"></div>
                <EpisodeCard {...show} id={id} />
              </Fragment>
            ))
          : null}
      </div>
    </div>
  )
}

export default Slider
