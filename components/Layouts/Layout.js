// components/Layouts
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

const IndexPage = () => {
  return (
    <section className={'bg-hero'}>
      <Header />
      <article className={'container'}>
        <div className="pt-20 text-right">
          <div className="inline-block text-left bg-white rounded-xl shadow py-14 px-14">
            <h6 className="text-3xl tracking-tight text-gray-900">
              <span className="text-xl mb-2 block">내 몸의 영양 발란스!</span>
            </h6>
            <h2 className="hero-title text-5xl leading-tight">
              유전자가 읽어주고,
              <br />
              AI가 말해주는
              <br />
              My Vital Balance.
            </h2>
            <p className="text-lg mt-8">
              건강 설문 작성하고,
              <br />내 몸에 맞는 영양소를 확인해 보세요!
            </p>
            <div className="mt-8 flex flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="">
                  <a
                    onClick={() => setShowModal(true)}
                    className="
                    btn
                    inline-flex
                    items-center
                    justify-center
                    text-white
                    bg-primary-600
                    hover:bg-primary-600-800
                    focus:bg-primary-600-800
                  "
                  >
                    회원 가입하기
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

const DtcPage = () => {
  return (
    <section className={'subpage dtc'}>
      <Header />
      {/* sub text */}
      <div className="container lg:px-0 px-6 pb-16 subpage--description">
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
      <div className="container lg:px-0 px-6 pb-16 subpage--description">
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
