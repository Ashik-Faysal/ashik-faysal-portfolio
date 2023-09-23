import About from "../About/About";
import WhatIDo from "../WhatIDo/WhatIDo";
import MySkills from "../Skills/MySkills";
import ContactMe from "../Contact/ContactMe";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Home = () => {

  return (
    <div className="px-8 bg-slate-600hu">
      <Slide className="my-4">
        <About />
      </Slide>
      <Zoom className="my-4">
        <WhatIDo />
      </Zoom>
      <Slide className="my-4">
        <MySkills />
      </Slide>
      <Zoom className="my-4">
        <ContactMe />
      </Zoom>
    </div>
  );
};

export default Home;
