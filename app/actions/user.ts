"use server";

import { prisma } from "@/db";

export default async function signin(username: string, password: string) {
  try {
    await prisma.user.create({
      data: { username, password },
    });

    return { status: 1 };
  } catch (error) {
    return { status: 0 };
  }
}
