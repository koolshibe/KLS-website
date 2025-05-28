
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
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'https://hb2d7h9foo6iagrh.public.blob.vercel-storage.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig;