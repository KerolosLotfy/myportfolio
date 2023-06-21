import { Application } from "express";

import * as skills from "./skills";
import { getData } from "./getAllData";
import * as projects from "./projects";
export const reactRouters = (app: Application): void => {
  app.get("/api/all", getData); // Get all Data 
  // Skills
  app.post("/api/skills", skills.add);
  app.get("/api/skill/:id", skills.showOne);
  app.put("/api/skill/:id", skills.update);
  app.delete("/api/skill/:id", skills.Delete);
  // projects
  app.post("/api/projects", projects.add);
  app.get("/api/project/:id", projects.showOne);
  app.put("/api/project/:id", projects.update);
  app.delete("/api/project/:id", projects.Delete);
};
