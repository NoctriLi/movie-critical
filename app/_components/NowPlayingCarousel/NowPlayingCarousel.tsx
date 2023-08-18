"use client";
import { useState, useEffect } from "react";
import MainImage from "./MainImage";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import SideImages from "./SideImages";
import { Movies, Movie } from "@/lib/interfaces";

const NowPlayingCourosel: React.FC<Movies> = (movies) => {
  const cards = movies.results;
  console.log(cards);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Movie[]>([]);
  const [activeCard, setActiveCard] = useState<Movie>(cards[activeIndex]);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % cards.length);
  };
  const handleLast = () => {
    setActiveIndex(
      activeIndex === 0 ? cards.length - 1 : activeIndex - (1 % cards.length)
    );
  };
  useEffect(() => {
    const updateVisibleCards = () => {
      const cardCount = cards.length;
      const newVisibleCards: Movie[] = [];

      for (let i = 1; i < 4; i++) {
        const cardIndex = (activeIndex + i) % cardCount;
        newVisibleCards.push(cards[cardIndex]);
      }
      setTimeout(() => {
        setVisibleCards(newVisibleCards);
        setActiveCard(cards[activeIndex]);
      }, 100);
    };

    updateVisibleCards();
  }, [activeIndex, movies]);

  return (
    <div className=" flex space-x-2 max-w-7xl h-4/5 mx-auto my-5 p-2 overflow-hidden">
      <div className=" w-full lg:w-2/3 h-full">
        <MainImage card={activeCard} activeIndex={activeIndex}>
          <BackButton handleClick={handleLast} />
          <NextButton handleClick={handleNext} />
        </MainImage>
      </div>

      <SideImages movies={...visibleCards} activeIndex={activeIndex} />
    </div>
  );
};

export default NowPlayingCourosel;
