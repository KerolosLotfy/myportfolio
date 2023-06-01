import { Request, Response, NextFunction } from "express";
import { Skills } from "../models/skills";
import { skills } from "../database/types";
import crypto from "crypto";
const skillsFunc = new Skills();
export const add = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { title, percent } = req.body;
    if (!title || !percent) {
      return res.status(400).send("All Fields Required");
    }
    await skillsFunc.create({
      id: crypto.randomUUID(),
      title,
      percent,
    } as skills);

    return res.status(200).send("ok");
  } catch (err: any) {
    console.log(err);
  }
};

export const showAll = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const result = await skillsFunc.getAll();
    res.send({ skills: result });
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
    const result = await skillsFunc.getOne(req.params.id);
    res.send({ skills: result });
  } catch (err: any) {
    console.log(err);
  }
};

export const update = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { title, percent } = req.body;
  try {
    const result = await skillsFunc.update({
      id: crypto.randomUUID(),
      title,
      percent,
    } as skills);
    console.log(result);

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
    await skillsFunc.delete(req.params.id);
    res.status(200).send("Deleted");
  } catch (err: any) {
    console.log(err);
  }
};
