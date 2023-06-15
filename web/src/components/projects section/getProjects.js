import React from "react";
// import { useEffect, useState } from "react";
import projects from "./myProjects.json";
import img from "../../assets/images/man.svg";
import { FaGithub, FaEye } from "react-icons/fa";
function GetProjects() {
  // const [projects, setProjects] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch("http://localhost:5500/dash/projects")
  //       .then((res) => {
  //         return res.text();
  //       })
  //       .then((result) => {
  //         setProjects(JSON.parse(result).projects);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         setProjects(e.message);
  //       });
  //   };
  //   fetchData();
  // }, [projects]);

  let data = projects
    ? projects.map((obj) => {
        return (
          <>
            <li key={obj.id} id={obj.id} data-cat={obj.category}>
              <div className="img">
                <img src={img} alt={obj.title} />
              </div>
              <h3>
                <a href={obj.repo} style={{fontSize: "2rem"}} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>

                <a href="#pro">{obj.title}</a>

                <a href={obj.demo} style={{fontSize: "2rem"}} target="_blank" rel="noreferrer">
                  <FaEye />
                </a>
              </h3>
            </li>
          </>
        );
      })
    : "";

  return (
    <>
      <ul>{data}</ul>
    </>
  );
}

export default GetProjects;
