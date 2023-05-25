import { Application } from "express";
import * as reactFuncs from "./reactapp";

export const reactRouters = (app: Application): void => {
  app.get("/", reactFuncs.showWeb);
};
