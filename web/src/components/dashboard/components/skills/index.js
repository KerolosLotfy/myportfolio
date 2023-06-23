import React from "react";
import { GetSkills } from "./getSkills";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../parts/button";

export const DashSkills = () => {
  const x = useNavigate();
  return (
    <>
      <div className="dash-title">
        <h2>Skills</h2>
        <Button
          custom={{ class: "btn", value: "New" }}
          click={() => x("new")}
        />
      </div>
      <div id="dash_skills">
        <div className="container">
          <Outlet/>
          <GetSkills />
        </div>
      </div>
    </>
  );
};
