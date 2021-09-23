import Head from 'next/head'
import Img from 'next/image'
import Modal from 'components/Modal'
import { useState } from 'react'
import Header from 'components/Layouts/Header'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="container">
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
              <Img src="/images/img-main-serviceflow@2x.png" width={1200} height={609} alt="서비스 순서" />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
