import React, { useState } from 'react';
import { Movie } from '@/lib/interfaces';
import AccordionItem from './AccordionItem';

const Accordion: React.FC<Movie> = ( movie: Movie) => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index: any) => {
      if (clicked === index) {
        return setClicked("0");
      }
      setClicked(index);
    };
   return (
    <ul className="accordion">
    
      <AccordionItem
        onToggle={() => handleToggle(movie.title)}
        active={clicked === movie.title}
        key={movie.title}
        movie={movie}
      />
  </ul>
   );
}
export default Accordion;