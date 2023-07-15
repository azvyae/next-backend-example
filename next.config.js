/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "*"
          }
        ],
      },
      {
        source: "/auth",
        headers: [
          {
            key: "Access-Control-Allow-Methods",
            value: "POST",
          },
        ],
      },
      {
        source: "/foods",
        headers: [
          {
            key: "Access-Control-Allow-Methods",
            value: "GET",
          },
        ],
      },
      {
        source: "/",
        headers: [
          {
            key: "Access-Control-Allow-Methods",
            value: "GET",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
