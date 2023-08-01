
import { Credits } from "@/lib/interfaces";
import ActorCard from "./ActorCard";





const ActorSlider: React.FC<Credits> = (credits) => {
  return (

 
      <div className="slider">
        {credits.cast.map(cast =>
          <ActorCard key={cast.id} {...cast}/> )}
        
      </div>



  );
};

export default ActorSlider;
