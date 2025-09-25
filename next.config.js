/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['images.unsplash.com', 'yflidv3jyhzviklc.public.blob.vercel-storage.com'],
    },
}

module.exports = nextConfig
