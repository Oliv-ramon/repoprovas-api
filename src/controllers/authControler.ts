import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  console.log("veio")
  res.sendStatus(201);
}