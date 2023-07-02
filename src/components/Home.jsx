import React from "react";
import About from "./About";
import WhatIDo from "./WhatIDo";
import MySkills from "./MySkills";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <div className="px-8 bg-slate-600hu">
      <About />
      <WhatIDo />
      <MySkills />
      <ContactMe />
    </div>
  );
};

export default Home;
