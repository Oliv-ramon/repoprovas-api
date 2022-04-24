import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userRepository, { CreateUserData } from "../repositories/userRepository.js"
import * as errorUtils from "../utils/errorUtils.js"

export async function create({ email, password }: CreateUserData) {
  await validateExistingEmail(email);

  const hashedPassword = bcrypt.hashSync(password, 12);

  await userRepository.insert({ email, password: hashedPassword });
}

export async function login({ email, password }: CreateUserData) {
  const user = await validateUserExistence(email);
  validatePassword(password, user.password);

  const token = jwt.sign(
    {
      id: user.id
    },
    process.env.JWT_SECRET
  );

  return token;
}

async function validateExistingEmail(email: string) {
  const user = await userRepository.findByEmail(email);

  if (user) throw errorUtils.conflictError("Esse email já foi cadastrado"); 
}

async function validateUserExistence(email: string) {
  const user = await userRepository.findByEmail(email);

  if (!user) throw errorUtils.conflictError("Esse email não possui cadastro");

  return user;
}

function validatePassword(password: string, hashedPassword: string) {
  const passwordsMatch = bcrypt.compareSync(password, hashedPassword);
  
  if(!passwordsMatch) throw errorUtils.unauthorizedError("Email ou senha incorretos");
}