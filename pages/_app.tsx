// Importing fonts (there's probably a better way to do this...)

import '@fontsource/crimson-text'
import crimsonTextLatin from '@fontsource/crimson-text/files/crimson-text-latin-400-normal.woff2'

// Setup for Chakra and Next environments
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'

import { type AppProps } from 'next/app'
import Head from 'next/head'

import { theme } from '../lib/theme'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Open Austin</title>
        <meta
          name="description"
          content="Open Austin is a volunteer citizen brigade advocating for open government, open data, and civic application development since 2009."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href={crimsonTextLatin}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <Analytics />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
