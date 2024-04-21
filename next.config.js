const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    scope: '/app'
})

const nextConfig = {
    output: 'export'
}

module.exports = withPWA(nextConfig)
