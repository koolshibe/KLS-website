
/**
 * @type {import('next').NextConfig}
 */

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
    },
    experimental: {
        serverActions: {
          bodySizeLimit: '1024mb',
        },
    },
}

module.exports = nextConfig;