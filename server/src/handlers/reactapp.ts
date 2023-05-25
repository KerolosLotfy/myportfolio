import { Request, Response, NextFunction } from "express";

export const showWeb = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  //   Render React App Here
  res.send(`<h1> My Portfolio </h1>`);
};
