import { Request, Response } from "express";

import { UserData } from "../repositories/userRepository.js";
import * as userService from "../services/userService.js";

export async function register(req: Request, res: Response) {
  const userData: UserData = req.body;

  await userService.register(userData);

  res.sendStatus(201);
}