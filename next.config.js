/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        minimumCacheTTL: 60,
        domains: ['github.com', 'via.placeholder.com'],
        loader: 'default',
        unoptimized: true,
    }
}

module.exports = nextConfig
