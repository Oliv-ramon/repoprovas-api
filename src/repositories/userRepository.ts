import { User } from "@prisma/client";
import prisma from "../database.js";

export type CreateUserData = Omit<User, "id">

export async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
}

export async function insert(createUserData: CreateUserData) {
  await prisma.user.create({
    data: createUserData
  });
}