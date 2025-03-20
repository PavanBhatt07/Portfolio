/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export (Required for Netlify)
  images: {
    unoptimized: true, // Fixes images not loading on Netlify
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }, 
      { protocol: "https", hostname: "i.imgur.com" },  
      { protocol: "https", hostname: "drive.google.com" }  
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
