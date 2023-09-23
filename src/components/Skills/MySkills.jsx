import React from "react";
import SkillBar from "./SkillBar";
import { Zoom } from "react-awesome-reveal";


const skills = [
  { name: "HTML", percentage: 95},
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85},
  { name: "React", percentage:80},
  { name: "Bootstrap", percentage: 85},
  { name: "Tailwind css", percentage: 95},
  { name: "Firebase", percentage: 95},
  { name: "Node.js", percentage: 85},
  { name: "MongoDB", percentage: 85},
  { name: "Express.js", percentage: 85 },
  { name: "Stripe", percentage: 75 },
  { name: "Redux", percentage: 50 },
  
  // Add more skills with unique colors as needed
];

const MySkills = () => {
  return (
    <Zoom>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </Zoom>
  );
};

export default MySkills;
