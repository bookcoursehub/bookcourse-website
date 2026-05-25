/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "bookcourse.co.uk" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};

module.exports = nextConfig;
