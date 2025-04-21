/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://povreshka.vercel.app',
  sitemapSize: 7000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*'],
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [],
  },
}
