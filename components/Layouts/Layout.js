// components/Layouts
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

const IndexPage = () => {
  return (
    <section className={'bg-hero'}>
      <Header />
    </section>
  )
}

const DtcPage = () => {
  return (
    <section className={'subpage dtc'}>
      <Header />
      {/* sub text */}
      <div className="container lg:px-0 px-4 pb-16 subpage--description">
        <h1 className="text-4xl font-extrabold pb-6">유전자 검사</h1>
        <p>조건이 참이면 실행하고 거짓이라면 실행하지 않는다.</p>
      </div>
    </section>
  )
}

const SurveyPage = () => {
  return (
    <section className={'subpage survey'}>
      <Header />
      {/* sub text */}
      <div className="container lg:px-0 px-4 pb-16 subpage--description">
        <h1 className="text-4xl font-extrabold pb-6">건강 설문</h1>
        <p>조건이 참이면 실행하고 거짓이라면 실행하지 않는다.</p>
      </div>
    </section>
  )
}

export default function Layout({ children }) {
  const router = useRouter()

  let HeaderContent = ''

  if (router.pathname === '/') {
    HeaderContent = <IndexPage />
  } else if (router.pathname === '/dtc') {
    HeaderContent = <DtcPage />
  } else if (router.pathname === '/survey') {
    HeaderContent = <SurveyPage />
  } else {
    HeaderContent = <Header />
  }

  return (
    <>
      <div className="layout">
        {HeaderContent}
        <main className="layout-main">{children}</main>
        <Footer />
      </div>
    </>
  )
}
