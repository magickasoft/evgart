import type { MetadataRoute } from 'next'

import { DOMAIN } from '../process.env/domain'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${DOMAIN}`
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 0.8,
      images: [],
      videos: [],
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 0.8,
      images: [],
      videos: [],
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.3,
      images: [],
      videos: [],
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.3,
      images: [],
      videos: [],
    },
  ]
}
