import prisma from "../database";

export interface UserData {
  email: string,
  password: string,
  confirmPassword: string
}

export async function findByEmail(email: string) {
  return prisma.users.findUnique({
    where: {
      email
    }
  });
}