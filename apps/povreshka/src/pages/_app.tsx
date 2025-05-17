import { YandexMetricaProvider } from '@artginzburg/next-ym'
import { CacheProvider } from '@emotion/react'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { appWithTranslation, useTranslation } from 'next-i18next'
import React from 'react'

import nextI18NextConfig from '../../next-i18next.config'
import { Footer, Header } from '../components/'
import { createEmotionCache } from '../helpers/createEmotionCache'
import { pageview } from '../helpers/gtag'
import { GA_MEASUREMENT_ID } from '../process.env/GA_MEASUREMENT_ID'
import { GlobalStyle } from '../styles/'

const clientSideEmotionCache = createEmotionCache()

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: any) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  React.useEffect(() => {
    const handleRouteChange = (url: string) => pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <CacheProvider value={emotionCache}>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="selfwork.ru" content="yPNRxy8hvJZM09awafRV5OISIDa8inoa7qNJBdS2tUQB1RVPha" />
        <meta name="google-site-verification" content="TZaq4O0W5T8D0npL-4SYDoVgvvVPLqiz2XvuL3_1pFQ" />
        <meta name="yandex-verification" content="4e5af36476b2d070" />
        <title>{t('SEO.title')}</title>
        <meta name="description" content={t('SEO.description')} />
        <meta name="keywords" content={t('SEO.keywords')} />
      </Head>
      <YandexMetricaProvider>
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Analytics />
        </>
      </YandexMetricaProvider>
    </CacheProvider>
  )
}
const AppWithTranslation = appWithTranslation(App, nextI18NextConfig)

export default AppWithTranslation
