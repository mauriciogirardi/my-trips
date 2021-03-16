import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="img/icon-192.png" />
        <link rel="apple-touch-icon" href="img/icon-512.png" />
        <meta name="theme-color" content="#06092B" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color="#29d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}