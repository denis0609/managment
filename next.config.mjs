/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io'],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  output: 'export', // Add this line to export the site as static files
};

export default nextConfig;
