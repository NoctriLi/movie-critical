import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css';



export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Movie Critical</title>
      <meta name="description" content="Movie Site!" />
    </Head>
  <Component {...pageProps} />
  </>
  )
}
