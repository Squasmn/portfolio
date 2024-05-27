const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig = {
  ...(isExport && { output: "export" }),
  distDir: isExport ? "out" : ".next",
  images: {
    domains: ["via.placeholder.com", "cdn.jsdelivr.net"],
    loader: "default",
  },
};

export default nextConfig;
