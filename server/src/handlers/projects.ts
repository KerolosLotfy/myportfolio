import { Request, Response, NextFunction } from "express";
import { projects } from "../models/projects";
import { dataTypes } from "../database/types";
import crypto from "crypto";

const projectsFunc = new projects();

export const add = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { title, languages, img, repo, demo, description, category } =
      req.body;

    if (!title || !languages || !repo || !demo) {
      return res.send("data Required");
    }
    await projectsFunc.create({
      id: crypto.randomUUID(),
      title,
      languages,
      img,
      repo,
      demo,
      category,
      description,
    } as dataTypes["projects"]);

    return res.status(200).send("Add New Project");
  } catch (err: any) {
    console.log(err);
  }
};

export const showAll = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  try {
    const result = await projectsFunc.getAll();
    return result;
  } catch (err: any) {
    console.log(err);
  }
};

export const showOne = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const result = await projectsFunc.getOne(req.params.id);
    res.send({ projects: result });
  } catch (err: any) {
    console.log(err);
  }
};

export const update = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { title, languages, img, repo, demo, category, description } = req.body;
  try {
    await projectsFunc.update({
      id: req.params.id,
      title,
      languages,
      img,
      repo,
      demo,
      category,
      description,
    } as dataTypes["projects"]);
    res.status(200).send("Updated");
  } catch (err: any) {
    console.log(err);
  }
};

export const Delete = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    await projectsFunc.delete(req.params.id);
    res.status(200).send("Deleted");
  } catch (err: any) {
    console.log(err);
  }
};
