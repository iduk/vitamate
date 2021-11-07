import Layout from 'components/Layouts/Layout'
import Head from 'next/head'
import 'styles/globals.scss'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
