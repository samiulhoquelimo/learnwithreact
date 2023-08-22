/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export' can not be run with headers
    // https://nextjs.org/docs/messages/export-no-custom-routes
    // output: 'export',

    // Use a custom build directory name  = “build”
    distDir: 'build',

    // Do something so that, the content cannot be displayed in a frame
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY"
                    }
                ]
            }
        ]
    },
    generateBuildId: async () => {
        return 'my-build-id'
    },
}

module.exports = nextConfig
