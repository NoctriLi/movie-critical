
import { Credits, CrewMember } from "@/lib/interfaces";
import CrewCard from "./CrewCard";





const CrewSlider: React.FC<Credits> = (credits, type) => {

  let crew = credits.crew.reduce((acc:CrewMember[], item:CrewMember) => {
    let existing = acc.find((i:CrewMember) => i.id === item.id);
    if (existing) {
      existing.department += item.department;
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

    return (

   
        <div className="slider">
  
          {crew.map(cast =>
            <CrewCard key={cast.id} {...cast}/> )}
        </div>

  
  
  
    );


};

export default CrewSlider;
