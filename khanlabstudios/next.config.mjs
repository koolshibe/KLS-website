/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
        // Basic redirect
        {
            source: '/about',
            destination: '/',
            permanent: true,
        }
        ]
    }
};

export default nextConfig;
