import { useEffect, useState } from "react";
import { getData } from "../../fetchData";

export const DashMain = () => {
  const [projects, setProjects] = useState(0);
  const [skills, setSkills] = useState(0);

  useEffect(() => {
    (async () => await getData())().then((data) => {
      setSkills(data.skills.length);
      setProjects(data.projects.length);
    });
  }, []);
  return (
    <>
      <div className="dash-title">
        <h2>Dashboard</h2>
        {/* <Button
          custom={{ class: "btn", value: "New" }}
          click={() => x("new")}
        /> */}
      </div>
      <div className="container">
        <div id="statics">
          <h3>Statics</h3>
          <div className="stats">
            <div className="box" style={{ border: "5px solid #f00" }}>
              <p style={{ color: "#f00" }}>Visitors</p>
              <span className="num">2</span>
            </div>
            <div className="box" style={{ border: "5px solid #0f0" }}>
              <p style={{ color: "#0f0" }}>Projects</p>
              <span className="num">{projects}</span>
            </div>
            <div className="box" style={{ border: "5px solid #00f" }}>
              <p style={{ color: "#00f" }}>Skills</p>
              <span className="num">{skills}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
