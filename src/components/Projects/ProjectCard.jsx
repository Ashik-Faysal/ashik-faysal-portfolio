import React from "react";
import { Zoom } from "react-awesome-reveal";

const ProjectCard = ({ project }) => {
  const { projectName, liveLink, technologies, image, category } = project;

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img src={image} alt={projectName} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectName}</div>
        <p className="text-white mb-2 font-bold">Category: {category}</p>
        <p className="text-white mb-2 font-semibold">
          Technologies: {technologies.join(", ")}
        </p>
      </div>
      <div className="px-6 py-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          Visit Live
        </a>
        <button
          onClick={() => showDetails(project)}
          className="mt-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
