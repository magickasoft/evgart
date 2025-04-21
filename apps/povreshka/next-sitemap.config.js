/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://povreshka.vercel.app',
  sitemapSize: 5000,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
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
