import React, { useState } from 'react';
import { Movie, Movies } from '@/lib/interfaces';

interface CarouselProps {
  movies: Movie[];
}

const Carousel: React.FC<Movies> = ( movies ) => {
  const [activeIndex, setActiveIndex] = useState(0);
    
  const handlePrev = () => {
    setActiveIndex((oldIndex) => (oldIndex === 0 ? movies.results.length - 1 : oldIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((oldIndex) => (oldIndex === movies.results.length - 1 ? 0 : oldIndex + 1));
  };

  return (
    <div className="relative flex items-center">
      <button onClick={handlePrev} className="relative left-0 p-4 bg-gray-500 text-white">Prev</button>
      <div className="flex-1 flex items-center ">
        <img src={"https://image.tmdb.org/t/p/w500" + movies.results[activeIndex].backdrop_path} alt={movies.results[activeIndex].title} className="w-1/2 h-64 object-cover" />
        <div className="ml-4 text-white">
          <h2 className="text-xl  font-bold">{movies.results[activeIndex].title}</h2>
          <p>{movies.results[activeIndex].overview}</p>
        </div>
      </div>
      <button onClick={handleNext} className="relative right-0 p-4 bg-gray-500 text-white">Next</button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {movies.results.map((_, index) => (
          <div key={index} className={`h-1 w-1  rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;