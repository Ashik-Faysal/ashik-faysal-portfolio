import React from 'react';

const WhatIDo = () => {
    return (
      <div className="grid md:grid-cols-2 gap-16">
        <div className="md:px-24">
          <h1 className="text-6xl font-extrabold">What I Do</h1>
          <h4 className="text-2xl font-bold">
            I just learned Web Designing and Development in last 6 months. I
            just staring my skill development
          </h4>
          <button
            className="my-4 bg-gradient-to-r from-base-100 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn"
          >
            See My Work 
          </button>
        </div>
        <div>
          <div className="md:px-24">
            <h5 className="text-2xl font-bold">Mern Stack Development</h5>
            <p className="text-lg">
              I can make a full-stack web application by using mern stack
              technology .I mean I can make a full-stack web applicatiion
              project by using html , css , bootstrap , tailwind CSS , React JS
              ,Node JS , Express JS , MongoDB
            </p>
            <button className="my-4 bg-gradient-to-r from-base-100 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn">Learn More...</button>
          </div>
          <div className="md:px-24">
            <h5 className="text-2xl font-bold">Front End Development</h5>
            <p className="text-lg">
              I can make website template by using React JS, JavaScript , HTML ,
              CSS ,Bootstrap , Tailwind CSS .I can do also dynamic
            </p>
            <button className="my-4 bg-gradient-to-r from-base-100 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn">Learn More...</button>
          </div>
          <div></div>
        </div>
      </div>
    );
};

export default WhatIDo;