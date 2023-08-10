
import { Credits } from "@/lib/interfaces";
import ActorCard from "./ActorCard";





const ActorSlider: React.FC<Credits> = (credits) => {
  console.log(credits)
  
  return (

    
      <div className="slider">
        {credits.cast && credits.cast.map(cast =>
        <div key={cast.id}>
          <ActorCard {...cast}/> 
          </div>
        )}
      </div>



  );
};

export default ActorSlider;
