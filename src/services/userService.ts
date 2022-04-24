import bcrypt from "bcrypt";

import * as userRepository from "../repositories/userRepository.js"
import * as errorUtils from "../utils/errorUtils.js"

export async function register({ email, password }: userRepository.CreateUserData) {
  await validateUserExistence(email);

  const hashedPassword = bcrypt.hashSync(password, 12);

  await userRepository.insert({ email, password: hashedPassword });
}

async function validateUserExistence(email: string) {
  const user = await userRepository.findByEmail(email);
  if (user) throw errorUtils.conflictError("this user already exist");

  return user;
}