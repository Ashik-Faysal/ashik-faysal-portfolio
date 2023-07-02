import React from "react";
import MyImage from "../assets/ashikfaysal.jpg"


const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 my-24">
      <div className="md:px-24">
        <h1 className="text-6xl">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
            Ashik Faysal
          </span>
          <br /> <span className="font-bold">I AM A MERN STACK DEVELOPER</span>
        </h1>
        <br />
        <span className="text-2xl font-bold">
          I am Ashik Faysal. I have learned Front-end-Development and also
          learned how to make a project by using mern-stack technology.I am
          interested in Backend Development.I can do hard working. I can also
          motivated myself easily
        </span>
      </div>
      <div className="avatar md:ml-24">
        <div className="w-4/6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={MyImage} />
        </div>
      </div>
    </div>
  );
};

export default About;
