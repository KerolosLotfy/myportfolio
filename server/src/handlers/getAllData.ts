import { Request, Response, NextFunction } from "express";
import { showAll as s } from "./skills";
import { showAll as p } from "./projects";

export const getData = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const skills = await s(_req, res, _next);
    const projects = await p(_req, res, _next);
    res.send({ skills, projects });
  } catch (err: any) {
    console.log(err);
  }
};
