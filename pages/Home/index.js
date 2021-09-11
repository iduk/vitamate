import Head from 'next/head'
import Image from 'next/image'

import './Home.module.scss'

export default function Home() {
  return (
    <section className="bg-hero bg-cover bg-no-repeat fixed top-0 left-0 w-full h-3/5 z-0 bg-success-100">
      <div className="container max-w-5xl flex flex-wrap justify-end items-center h-full pt-24">
        <div className="bg-white w-7/1 rounded-xl shadow">
          <div className="py-14 px-16">
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
                  href="#"
                  className="
                  btn
                  inline-flex
                  items-center
                  justify-center
                  text-white
                  bg-primary
                  hover:bg-primary-dark
                  focus:bg-primary-dark
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
      </div>
    </section>
  )
}
