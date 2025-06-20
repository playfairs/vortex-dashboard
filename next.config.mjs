/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/index.html"
            }
        ]
    },
    images: {
        // unoptimized: true
        domains: ["i.imgur.com", "cdn.kazu.bot"]
    },
}

export default nextConfig;