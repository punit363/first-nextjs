// import { NextResponse } from 'next/server';

export async function GET() {
  // Imagine your database logic here
  // const data = await fetchDataFromDB();

  return Response.json({
    name: "Punit",
    email: "Punit@gmail.com",
  });
}
