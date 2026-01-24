/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Optional: if deploying to static host or avoiding optimization costs initially
  },
};

export default nextConfig;
