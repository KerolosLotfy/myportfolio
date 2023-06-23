import React from "react";
import { useEffect, useState } from "react";
import img from "../../assets/images/man.svg";
import { FaGithub, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getData } from "../fetchData";
import { Button } from "../dashboard/components/parts/button";
function GetProjects({ dash = false }) {
  const [projects, setProjects] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    (async () => await getData())().then((data) => setProjects(data.projects));
  }, [projects]);

  const delProject = async (id) => {
    await fetch(`http://localhost:5500/api/project/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .finally(() => {
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      });
  };

  let data = projects
    ? projects.map((obj) => {
        return (
          <li key={obj.id} id={obj.id} data-cat={obj.category || "web"}>
            <div className="img">
              <img src={obj.img || img} alt={obj.title} />
            </div>
            <h3>
              <a
                href={obj.repo}
                style={{ fontSize: "2rem" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <Link to={"/pro/" + obj.id}>{obj.title}</Link>

              <a
                href={obj.demo}
                style={{ fontSize: "2rem" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaEye />
              </a>
            </h3>
            {dash ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button type="delete" click={() => delProject(obj.id)} />
                {/* <Button type="update" click={() => delProject(obj.id)} /> */}
              </div>
            ) : (
              false
            )}
          </li>
        );
      })
    : "";

  return (
    <>
      {message ? <div className="popup">{message}</div> : false}
      <ul>{data}</ul>
    </>
  );
}

export default GetProjects;
