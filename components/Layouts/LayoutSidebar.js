import Link from 'next/link'
import styled from 'styled-components'
import Sidebar from './Sidebar'

export default function LayoutSidebar({ Component, pageProps }) {
  return (
    <section className={'container mx-auto max-w-5xl flex flex-initial'}>
      <Sidebar />
      <div className="w-full px-16 py-16">
        <h1 className=" text-4xl font-bold pb-12">서브제목입니다</h1>
        <Component {...pageProps} />
      </div>
    </section>
  )
}
