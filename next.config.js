/** @type {import('next').NextConfig} */

const nextBuildId = require("next-build-id");

const nextConfig = {
    generateBuildId: async () => {
        return nextBuildId({ dir: __dirname });
    },
    experimental: {
        scrollRestoration: true,
    },
};

module.exports = nextConfig;
