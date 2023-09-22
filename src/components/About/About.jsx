import React, { useState, useEffect } from "react";
import MyImage from "../../assets/ashikfaysal.jpg";

const About = () => {
  const roles = [
    "Mern Stack Developer",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [animationDirection, setAnimationDirection] = useState("forward");

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const animateRole = () => {
      intervalId = setInterval(() => {
        if (animationDirection === "forward") {
          if (currentIndex < roles[currentRoleIndex].length) {
            setDisplayedRole(
              roles[currentRoleIndex].substring(0, currentIndex + 1)
            );
            currentIndex++;
          } else {
            setAnimationDirection("backward"); // Reverse the animation direction
          }
        } else {
          if (currentIndex > 0) {
            setDisplayedRole(
              roles[currentRoleIndex].substring(0, currentIndex - 1)
            );
            currentIndex--;
          } else {
            setAnimationDirection("forward"); // Switch back to forward animation
            clearInterval(intervalId);
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          }
        }
      }, 100); // Character addition/removal interval
    };

    animateRole(); // Start the animation for the first role

    // Cleanup function to clear the interval when the component unmounts or updates
    return () => {
      clearInterval(intervalId);
    };
  }, [currentRoleIndex, animationDirection]);

  return (
    <div className="grid md:grid-cols-2 gap-16 justify-around mt-4 mb-4 md:mb-24">
      <div className="px-2 md:px-24">
        <h1 className="text-6xl">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
            Ashik Faysal
          </span>
          <br />
          <span className="font-bold role-text-animation">
            I'm {displayedRole}
          </span>
        </h1>
        <br />
        <span className="text-xl font-bold">
          I am Ashik Faysal. I have learned Front-end Development and also
          learned how to make a project by using MERN stack technology. I am
          interested in Backend Development. I can do hard work, and I can also
          motivate myself easily.
        </span>
      </div>
      <div className="avatar">
        <div className="w-4/6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={MyImage} alt="Ashik Faysal" />
        </div>
      </div>
    </div>
  );
};

export default About;
