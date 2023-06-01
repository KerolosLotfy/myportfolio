import { Application } from "express";

import * as skillsFunc from "./skills";
export const reactRouters = (app: Application): void => {
  app.get("/dash/skills", skillsFunc.showAll);
  app.post("/dash/skills", skillsFunc.add);
  app.get("/dash/skill/:id", skillsFunc.showOne);
  app.put("/dash/skill/:id", skillsFunc.update);
  app.delete("/dash/skill/:id", skillsFunc.Delete);
};
