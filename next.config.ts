import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.18.44",
    "*.192.168.18.44",
    "192.168.18.8",
    "*.192.168.18.8",
    "192.168.1.20",
    "*.192.168.1.20",
    "192.168.18.183",
    "*.192.168.18.183",
    "localhost",
    "127.0.0.1",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.18.44",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.18.8",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "172.29.112.1",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.18.183",
        port: "3000",
        pathname: "/**",
      },
      // Future: Add Google Drive or other image hosting domains
      // {
      //   protocol: "https",
      //   hostname: "drive.google.com",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
