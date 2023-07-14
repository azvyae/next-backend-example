import { NextRequest, NextResponse } from "next/server";

function GET(req: NextRequest) {
  const res = {
    message: "OK. Start navigate our backend APIS",
    data: {
      endpoints: [
        {
          method: "GET",
          endpoint: "/foods",
          description:
            "List of Indonesian foods and its price, need authorization bearer token provided when logged in.",
        },
        {
          method: "POST",
          endpoint: "/auth",
          description:
            "Validates email and password [email: azvya@example.app, pass: example2048]. Will return bearer token.",
        },
      ],
    },
  };
  return NextResponse.json(res);
}

export { GET };
