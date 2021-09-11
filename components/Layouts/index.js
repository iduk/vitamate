// components/layout.js
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { Fragment } from 'react'

export default function Layout({ children }) {
  return (
    <>
      <Fragment>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
          />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </Fragment>
    </>
  )
}
