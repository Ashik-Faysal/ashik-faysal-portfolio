import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const MyProject = () => {
  const [projects, setProjects] = useState([]);
  const [displayCount, setDisplayCount] = useState(3); // Initially display 3 cards

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleShowMore = () => {
    // When "Show More" is clicked, set displayCount to the total number of projects
    setDisplayCount(projects.length);
  };

  return (
    <div className="my-12">
      <div className="text-center my-8">
        <h2 className="text-5xl font-bold">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.slice(0, displayCount).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {displayCount < projects.length && (
          <button className="text-center" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProject;
