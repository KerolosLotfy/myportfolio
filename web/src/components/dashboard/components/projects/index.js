import GetProjects from "../../../projects section/getProjects";
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from "../parts/button";

export const DashProjects = () => {
  const x = useNavigate();

  return (
    <>
      <div className="dash-title">
        <h2>Projects</h2>
        <Button
          custom={{ class: "btn", value: "New" }}
          click={() => x("new")}
        />
      </div>
      <div id="portfolio">
        <div className="container">
          <Outlet />
          <GetProjects dash={true} />
        </div>
      </div>
    </>
  );
};
