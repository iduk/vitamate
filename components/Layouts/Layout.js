// components/Layouts
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import SurveyStart from 'pages/survey/survey-start'
import Subscription from 'pages/dtc/subscription'

const IndexPage = () => {
  const [randomIMG, setRandomIMG] = useState(undefined)

  let Images = [
    'https://images.pexels.com/photos/9250013/pexels-photo-9250013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1200',
    'https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1200',
    'https://images.pexels.com/photos/2549027/pexels-photo-2549027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1200',
  ]

  useEffect(() => {
    setRandomIMG(Math.floor(Math.random() * Images.length))
  }, [])

  return (
    <section className={'bg-hero'} style={{ backgroundImage: `url(${Images[randomIMG]})` }}>
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
  const [isShowing, setIsShowing] = useState(false)
  return (
    <section className={'subpage dtc'}>
      <Header />
      {/* sub text */}
      <div className="container lg:px-0 px-6 subpage--description">
        <h1 className="font-light text-3xl leading-normal">
          나를 알게되는 유전자 검사를 통해
          <br />
          <b>'맞춤 영양소'</b>를 추천 받아보세요
        </h1>

        <div className="mt-8">
          <button onClick={() => setIsShowing(true)} className="rounded-md bg-primary-600 text-white text-lg py-3 px-6">
            유전자 검사 신청하기
          </button>
        </div>
      </div>
      <Modal title="유전자 검사 신청하기" onClose={() => setIsShowing(false)} show={isShowing}>
        <Subscription />
      </Modal>
    </section>
  )
}

const SurveyPage = () => {
  const [surveyStart, setSurveyStart] = useState(false)

  return (
    <section className={'subpage survey'}>
      <Header />
      {/* sub text */}
      <div className="container lg:px-0 px-6 pb-16 subpage--description">
        <h1 className="font-light text-3xl leading-normal">
          현재 몸 상태에 맞는 영양소를 찾아 드립니다
          <br />
          <b>설문을 통해</b> 보다 정확한 <b>나만을 위한 영양제</b>를 추천 받으세요
        </h1>
        <div className="mt-8">
          <button
            onClick={() => setSurveyStart(true)}
            className="rounded-md bg-primary-600 text-white text-lg py-3 px-6"
          >
            설문 시작하기
          </button>
        </div>
      </div>

      <Modal onClose={() => setSurveyStart(false)} show={surveyStart} size="lg">
        <SurveyStart />
      </Modal>
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
