import * as userRepository from "../repositories/userRepository.js"

export async function register({ email }: userRepository.UserData) {
  const user = await userRepository.findByEmail(email);
}