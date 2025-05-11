import type { MetadataRoute } from 'next'

import { DOMAIN } from '../process.env/domain'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*'],
        crawlDelay: 1,
      },
    ],
    sitemap: [`https://${DOMAIN}/sitemap.xml`],
    host: DOMAIN,
  }
}
