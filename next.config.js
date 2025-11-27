/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', <-- REMOVIDO para funcionar serverless na Vercel
  images: {
    unoptimized: true, 
  },
  trailingSlash: true,
};

module.exports = nextConfig;