// components/Layouts
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <div className="layout">
        <section className={`${router.pathname === '/dtc' ? 'header-content dtc-content' : null} `}>
          <Header />
        </section>
        <main className="layout-main">{children}</main>
        <Footer />
      </div>
    </>
  )
}
