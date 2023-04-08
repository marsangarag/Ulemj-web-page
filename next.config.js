/** @type {import('next').NextConfig} */

const nextBuildId = require("next-build-id");

const nextConfig = {
    distDir: "build",
    generateBuildId: async () => {
        return nextBuildId({ dir: __dirname });
    },
};

module.exports = nextConfig;
