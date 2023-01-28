/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/invite',
        destination: 'https://discord.com/oauth2/authorize?client_id=995348230449672212&permissions=11534344&scope=bot%20applications.commands',
        permanent: true,
      },
      {
        source: '/invite/2',
        destination: 'https://discord.com/oauth2/authorize?client_id=1043959093322330142&permissions=11534344&scope=bot%20applications.commands',
        permanent: true,
      },
      {
        source: '/support',
        destination: 'https://discord.gg/tPAEqM3jAx',
        permanent: true,
      },
      {
        source: '/premium',
        destination: 'https://www.patreon.com/sanamusicbot',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
