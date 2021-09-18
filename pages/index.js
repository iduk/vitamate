import Head from 'next/head'
import Img from 'next/image'
import Modal from 'components/Modal'
import { useState } from 'react'
import Header from 'components/Layouts/Header'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="container-view">
        <div className="bg-hero"></div>
        {/* hero */}
        <article className="hero-section">
          <div className="pt-24 text-right">
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
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* main contents */}
        <article className="py-36">
          <div className="text-center mb-20">
            <p className="text-lg mb-4">50가지 DNA 분석 & 30여가지 건강 설문 분석</p>
            <h1 className="text-5xl leading-snug font-normal">
              당신에게 딱 맞는 <b className="font-extrabold">맞춤 영양제</b>를
              <br />
              정기구독 해보세요
            </h1>
          </div>

          <div>
            <div className=" relative">
              <Img src="/images/img-main-serviceflow@2x.png" width={1024} height={520} alt="서비스 순서" />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
