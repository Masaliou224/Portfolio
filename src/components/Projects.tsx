import { motion } from "framer-motion";
import React from "react";

const Projects: React.FC = () => {
  const projects = [
    { projectName: "Project 1", description: "A TJM calculator.", link: "#" },
    { projectName: "Project 2", description: "A laravel Crud.", link: "#"},
    { projectName: "Project 3", description: "An audio player.", link: "#"},
  ];

  return (
    <section className="projects" id="projects">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Projects</h2>
        <div>
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="projects-section">
              <div className="project-card">
                <div className="project-image"></div>
                <div className="project-content">
                  <h3>{project.projectName}</h3>
                  <p>{project.description}</p>
                  <div className="project-link">
                    <a href={project.link} target="__blank" ref="nooperner noreferrer"> View Orijects </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;