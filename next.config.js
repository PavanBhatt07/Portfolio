/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }, 
      { protocol: "https", hostname: "i.imgur.com" },  // Add Imgur
      { protocol: "https", hostname: "drive.google.com" } // Add Google Drive
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
