/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "asset.cloudinary.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
