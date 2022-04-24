import { Request, Response } from "express";

import { CreateUserData } from "../repositories/userRepository.js";
import * as userService from "../services/userService.js";

export async function register(req: Request, res: Response) {
  const userData: CreateUserData = req.body;

  await userService.register(userData);

  res.sendStatus(201);
}