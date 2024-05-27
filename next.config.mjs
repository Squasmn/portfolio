/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build", // Specify custom build directory
  images: {
    domains: ["via.placeholder.com", "cdn.jsdelivr.net"],
    loader: "default",
  },
};

export default nextConfig;
