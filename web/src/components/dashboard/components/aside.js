import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaSlackHash,
  FaUserCog,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

export const Aside = () => {
  const [isActive, setIsActive] = useState(false);

  const asideActive = () => {
    document.querySelector("aside").classList.toggle("active");
    setIsActive(!isActive);
  };
  return (
    <aside>
      <div className="arrow" onClick={asideActive}>
        {isActive ? <FaArrowAltCircleLeft /> : <FaArrowAltCircleRight />}
      </div>
      <div className="logo">
        <Link to="/">InTheSky</Link>
      </div>
      <ul>
        <li>
          <NavLink to="/dash" end>
            <FaSlackHash style={{ marginRight: 5, fontSize: "1.5rem" }} />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dash/projects">
            <FaSlackHash style={{ marginRight: 5, fontSize: "1.5rem" }} />
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dash/skills">
            <FaSlackHash style={{ marginRight: 5, fontSize: "1.5rem" }} />
            <span>Skills</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dash/settings">
            <FaUserCog style={{ marginRight: 5, fontSize: "1.5rem" }} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      {/* <form method="post" action="/login" >
        <input/>
        <button>login</button>
      </form> */}
    </aside>
  );
};
