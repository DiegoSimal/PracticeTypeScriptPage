import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NODE_ENV === 'production' ? "/PRACTICETYPESCRIPTPAGE" : '',
};

export default nextConfig;
