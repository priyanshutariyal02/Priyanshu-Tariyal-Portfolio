/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Remove the typescript section as it's not needed for basic configuration
};

export default nextConfig;
