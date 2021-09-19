// components/Layouts
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="layout-main">{children}</main>
        <Footer />
      </div>
    </>
  )
}
