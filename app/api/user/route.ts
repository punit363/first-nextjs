import { prisma } from "@/db";
import { NextRequest } from "next/server";

export async function GET() {
  // Imagine your database logic here
  // const data = await fetchDataFromDB();

  return Response.json({
    name: "Punit",
    email: "Punit@gmail.com",
  });
}

export async function POST(req: NextRequest) {
  // Imagine your database logic here
  // const data = await fetchDataFromDB();
  const body = await req.json();
  console.log(body, "body");
  await prisma.user.create({
    data: { username: body.username, password: body.password },
  });

  return Response.json({
    name: "PunitPawar",
    email: "Punit@gmail.com",
  });
}
