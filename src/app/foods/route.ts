import { NextRequest, NextResponse } from "next/server";

function GET(req: NextRequest) {
  const authorizationHeader = req.headers.get("Authorization");
  if (!authorizationHeader) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401, statusText: "Unauthorized" }
    );
  }
  if (
    authorizationHeader !==
    `Bearer AowhcxMxFzwjrUV7nHpBcahKasozheYUmL6izefZds6ibz1XlmY6TsOWRBeOXqJY`
  ) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401, statusText: "Unauthorized" }
    );
  }

  const res = {
    data: {
      foods: [
        {
          name: "Rendang",
          price: 20000,
        },
        {
          name: "Ayam Goreng",
          price: 15000,
        },
        {
          name: "Nasi Uduk",
          price: 10000,
        },
      ],
    },
  };
  return NextResponse.json(res);
}

export { GET };
