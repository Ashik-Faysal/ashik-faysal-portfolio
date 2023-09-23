import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";





  const MySkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("./skills.json")
      .then((res) => res.json())
      .then((data) => {
        // Set the fetched data in the state
        console.log(data);
        setSkills(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

     return (
       <Zoom>
         <div className="container mx-auto py-10">
           <h1 className="text-3xl font-bold mb-6 text-center">My Skills</h1>
           <Marquee speed={50} gradient={true} pauseOnHover={true}>
             {skills.map((skill, index) => (
               <SkillCard
                 key={index}
                skill={skill}
               />
             ))}
           </Marquee>
         </div>
       </Zoom>
     );
};


export default MySkills;
