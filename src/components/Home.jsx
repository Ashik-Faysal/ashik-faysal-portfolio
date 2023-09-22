import React, { useEffect, useRef } from "react";
import About from "./About/About";
import WhatIDo from "./WhatIDo";
import MySkills from "./MySkills";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactMe from "./Contact/ContactMe";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const aboutRef = useRef(null);
  const whatIDoRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Define a common animation configuration
    const commonAnimation = {
      duration: 1500, // Adjust the duration as needed
      opacity: 100,
      y: 80, // Adjust the initial position as needed
      ease: "power3.out", // Adjust the easing function as needed
    };

    // Create GSAP animations for each section
    gsap.from(aboutRef.current, {
      ...commonAnimation,
      scrollTrigger: {
        trigger: aboutRef.current,
        toggleActions: "restart none reverse none",
      },
    });

    gsap.from(whatIDoRef.current, {
      ...commonAnimation,
      scrollTrigger: {
        trigger: whatIDoRef.current,
        toggleActions: "restart none reverse none",
      },
    });

    gsap.from(skillsRef.current, {
      ...commonAnimation,
      scrollTrigger: {
        trigger: skillsRef.current,
        toggleActions: "restart none reverse none",
      },
    });

    gsap.from(contactRef.current, {
      ...commonAnimation,
      scrollTrigger: {
        trigger: contactRef.current,
        toggleActions: "restart none reverse none",
      },
    });
  }, []);

  return (
    <div className="px-8 bg-slate-600hu">
      <div className="my-4" ref={aboutRef}>
        <About />
      </div>
      <div className="my-4" ref={whatIDoRef}>
        <WhatIDo />
      </div>
      <div className="my-4" ref={skillsRef}>
        <MySkills />
      </div>
      <div className="my-4" ref={contactRef}>
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
