import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
  const authorizationHeader = req.headers.get("Authorization");
  if (authorizationHeader) {
    return NextResponse.json(
      { message: "Can't reauthenticate" },
      { status: 403, statusText: "Can't reauthenticate" }
    );
  }

  try {
    const body: { email?: string; password?: string } = await req.json();
    if (Object.entries(body).length === 0) {
      return NextResponse.json(
        { message: "Bad Request" },
        { status: 400, statusText: "Bad Request" }
      );
    }
    if (body.email !== "azvya@example.app" && body.password !== "example2048") {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 422, statusText: "Invalid credentials" }
      );
    }
    const res = {
      token: process.env.USER_TOKEN,
    };
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(
      { message: "Bad Request" },
      { status: 400, statusText: "Bad Request" }
    );
  }
}

export { POST };
