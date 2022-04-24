import { Request, Response } from "express";

import { CreateUserData } from "../repositories/userRepository.js";
import * as userService from "../services/userService.js";

export async function create(req: Request, res: Response) {
  const userData: CreateUserData = req.body;

  await userService.create(userData);

  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const userData: CreateUserData = req.body;

  const token = await userService.login(userData);

  res.status(200).send({token});
}