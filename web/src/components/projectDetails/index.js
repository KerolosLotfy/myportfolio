import React from "react";
export const Project = ({ id, projects }) => {
  const project = projects.filter((pro) => pro.id === id);
  return (
    <>
      <div>
        <h2>{project.title}</h2>
        <div className="languages">
          {project.languages.map((lang) => {
            return lang + "|";
          })}
        </div>
		<p className="desc">{project.description}</p>
      </div>
    </>
  );
};
