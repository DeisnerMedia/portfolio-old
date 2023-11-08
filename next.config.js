/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        domains: ['github.com', 'via.placeholder.com'],
        loader: 'default',
    },
}

module.exports = nextConfig
