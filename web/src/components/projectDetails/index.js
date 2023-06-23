import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { FaGithub, FaEye } from "react-icons/fa";
import { getData } from "../fetchData";

export const Project = () => {
  const [project, setProject] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    (async () => await getData())().then((data) => {
      setProject(() => data.projects.filter((pro) => pro.id === id)[0]);
    });
  }, [id]);

  return (
    <section id="proj">
      <div className="container">
        {project ? (
          <>
            <div className="img">
              <img src={project.img} alt="project" />
            </div>
            <div className="text">
              <h2>{project.title}</h2>
              <div className="languages">
                {project.languages.split(",").map((lang) => (
                  <span>{lang}</span>
                ))}
              </div>
              <p className="desc">{project.description || "No description"}</p>

              <div className="links">
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaEye />
                </a>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
