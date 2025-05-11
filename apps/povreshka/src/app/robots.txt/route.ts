import { DOMAIN } from '../../process.env/domain'
import { isProduction } from '../../process.env/node'

export const dynamic = 'force-static'

export async function GET() {
  const content = isProduction
    ? `
# *
User-agent: *
Allow: /
Disallow: /api/*
Disallow: /_next/*
Crawl-delay: 1

# Host
Host: ${DOMAIN}

# Sitemaps
Sitemap: https://${DOMAIN}/sitemap.xml`
    : `
# *
User-agent: *
Disallow: /`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
