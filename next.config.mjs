/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enabling React Strict Mode for development (optional but recommended)
    reactStrictMode: true,
  
    // Ensure Next.js uses server-based rendering (default on Vercel)
    // This tells Next.js to use Node.js as the target, enabling SSR, ISR, and dynamic routes
    output: 'standalone',
  
    // Optionally customize headers for specific features
    async headers() {
      return [
        {
          source: '/(.*)',  // Apply to all routes
          headers: [
            {
              key: 'Permissions-Policy',  // Adjust or remove Permissions-Policy header
              value: 'interest-cohort=()',  // Disable FLoC or other experimental features
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  