/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60,
        domains: ['github.com', 'via.placeholder.com'],
        loader: 'default',
    }
}

module.exports = nextConfig
