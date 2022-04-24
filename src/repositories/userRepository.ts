import { User } from "@prisma/client";
import prisma from "../database.js";

export type CreateUserData = Omit<User, "id">

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
}

async function insert(createUserData: CreateUserData) {
  await prisma.user.create({
    data: createUserData
  });
}

const userRepository = {
  findByEmail,
  insert
};

export default userRepository;