/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === "true";
const nextConfig = {
  ...(isExport && { output: "export" }),
  distDir: "build",
  images: {
    domains: ["via.placeholder.com", "cdn.jsdelivr.net"],
    loader: "default",
  },
};

export default nextConfig;
