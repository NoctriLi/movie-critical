'use client'
import { useState, useEffect } from 'react'
import MainImage from './MainImage'
import NextButton from './NextButton'
import BackButton from './BackButton'
import SideImages from './SideImages'
import { Movies, Movie } from '@/lib/interfaces'

const NowPlayingCourosel: React.FC<Movies> = (movies) => {
  const cards = movies.results

  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState<Movie[]>([])
  const [activeCard, setActiveCard] = useState<Movie>(cards[activeIndex])
  const [direction, setDirection] = useState('next')

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % cards.length)
    setDirection('next')
  }
  const handleLast = () => {
    setActiveIndex(
      activeIndex === 0 ? cards.length - 1 : activeIndex - (1 % cards.length)
    )
    setDirection('last')
  }

  useEffect(() => {
    const updateVisibleCards = () => {
      const cardCount = cards.length
      const newVisibleCards: Movie[] = []

      for (let i = 0; i <= 4; i++) {
        const cardIndex = (activeIndex + i) % cardCount
        newVisibleCards.push(cards[cardIndex])
      }
      setTimeout(() => {
        setVisibleCards(newVisibleCards)
        setActiveCard(cards[activeIndex])
      }, 150)
    }

    updateVisibleCards()
  }, [activeIndex, movies, cards])

  return (
    <div className="relative mx-auto my-5 flex h-full max-w-7xl space-x-2 p-2">
      <div className="scale-80 relative h-full w-full transition  lg:scale-90 ">
        <MainImage card={activeCard} activeIndex={activeIndex}>
          <BackButton handleClick={handleLast} />
          <NextButton handleClick={handleNext} />
        </MainImage>
      </div>

      <SideImages
        movies={visibleCards}
        activeIndex={activeIndex}
        direction={direction}
      />
    </div>
  )
}

export default NowPlayingCourosel
