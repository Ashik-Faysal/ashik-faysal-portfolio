import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="md:flex justify-between my-12 bg-base-200 h-24 items-center rounded-lg">
        <div>
          <button className="btn btn-ghost text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
            Ashik Faysal
          </button>
        </div>
        <div className="md:flex gap-4">
          <button className="btn btn-outline">
            <Link to="/">Home</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/whatIDo">About</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/skills">Skills</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
        <div>
          <button className="btn btn-outline  text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
            <Link>Download Resume</Link>
          </button>
        </div>
      </div>
    );
};

export default Navbar;