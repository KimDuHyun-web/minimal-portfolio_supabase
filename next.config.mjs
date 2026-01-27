/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phknlljlhlzlbkjijlgw.supabase.co',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
