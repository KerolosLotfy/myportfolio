import { FaUserAlt } from "react-icons/fa";
import { Aside } from "./components/aside";
import "./style.css";
import { Outlet } from "react-router-dom";
export const Dashboard = () => {
  return (
    <section id="dash">
      <Aside />
      <main>
        <div className="dash-header">
          <p>Header</p>
          <FaUserAlt style={{ cursor: "pointer" }} />
        </div>
        <Outlet />
      </main>
    </section>
  );
};
