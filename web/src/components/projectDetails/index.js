import React from "react";
import projects from "../projects section/myProjects.json";
import "./style.css";
import { useParams } from "react-router-dom";
import { FaGithub, FaEye } from "react-icons/fa";

export const Project = () => {
  let { id } = useParams();
  const project = projects.filter((pro) => pro.id === parseInt(id))[0];
  return (
    <section id="proj">
      <div className="container">
        <div className="img">
          <img src={project.img} alt="project" />
        </div>
        <div className="text">
          <h2>{project.title}</h2>
          <div className="languages">
            {project.languages.map((lang) => {
              return <span>{lang}</span>;
            })}
          </div>
          <p className="desc">{project.description}</p>

          <div className="links">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <FaEye />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
