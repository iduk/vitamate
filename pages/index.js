import Head from 'next/head'
import Img from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <section className="w-full relative py-32">
        {/* bg */}
        <article className="absolute inset-0 w-full h-full z-10">
          <div className="relative w-full h-full overflow-hidden">
            <span className="inline-block absolute -bottom-1/4 -left-32">
              <Img src="/images/circle-border-primary.svg" width={500} height={500} alt="bg image" />
            </span>
            <span className="inline-block absolute -top-48 -right-32">
              <Img src="/images/circle-primary.svg" width={400} height={400} alt="bg image" />
            </span>
          </div>
        </article>
        {/* content */}
        <div className={'container px-6 pb-16 lg:px-0 relative text-center'}>
          <h2 className="text-3xl lg:text-4xl leading-snug font-normal mb-5">
            <b className="text-primary-600 font-extrabold">비타메이트</b>
            {/* <br />
            개인 맞춤 영양제 서비스 */}
          </h2>
          <p className="text-base lg:text-lg px-4 lg:p-0 max-w-2xl text-center mx-auto">
            비타메이트의 '개인 맞춤 영양제 서비스'는 건강정보를 AI(인공지능) 알고리즘으로 분석하여 '맞춤 영양소'를 추천,
            고객이 선택한 영양제를 정기배송하는 서비스입니다
          </p>
          <ul className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-4 place-content-center">
            <li>
              <div className="p-12 lg:p-20 flex items-center justify-center">
                <span className="w-28 h-28 lg:w-24 lg:h-20 inline-flex relative">
                  <Img src="/images/main-icon-1.svg" layout="fill" alt="건강정보 AI 알고리즘 추천 아이콘" />
                </span>
              </div>
              <p className="text-2xl">
                건강정보기반
                <br />
                AI 알고리즘 분석
              </p>
            </li>
            <li>
              <div className="p-12 lg:p-20 flex items-center justify-center">
                <span className="w-28 h-28 lg:w-24 lg:h-20 inline-flex relative">
                  <Img src="/images/main-icon-2.svg" layout="fill" alt="분석결과에 맞는 영양소 추천 아이콘" />
                </span>
              </div>
              <p className="text-2xl">
                분석결과에 맞는
                <br /> 개인맞춤 영양제 추천
              </p>
            </li>
            <li>
              <div className="p-12 lg:p-20 flex items-center justify-center">
                <span className="w-28 h-28 lg:w-24 lg:h-20 inline-flex relative">
                  <Img src="/images/main-icon-3.svg" layout="fill" alt="고객이 선택한 영양제 정기배송 아이콘" />
                </span>
              </div>
              <p className="text-2xl">
                고객이 선택한
                <br /> 영양제 정기배송
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full relative z-0 overflow-hidden" style={{ backgroundColor: '#f2f2f2' }}>
        {/* bg */}
        <article className="absolute inset-0 w-full max-w-7xl mx-auto h-full" style={{ zIndex: '-1' }}>
          <div className="relative h-full">
            <span className="inline-block absolute -top-16 -right-48">
              <Img src="/images/circle-border-gray.svg" width={300} height={300} alt="bg image" />
            </span>
            <span className="inline-block absolute top-1/4 -left-56">
              <Img src="/images/circle-border-gray.svg" width={600} height={600} alt="bg image" />
            </span>
          </div>
        </article>

        {/* content */}
        <div className={'container pt-16 z-30'}>
          <article className="flex flex-wrap -mx-6 overflow-hidden items-center">
            <div className="my-4 px-16 w-full overflow-hidden lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-normal mb-4">
                <b className="text-primary-600 font-extrabold">알고리즘</b> 맞춤 추천
              </h2>
              <p className="text-base lg:text-lg">
                50항목의 유전자 검사와 식습관, 운동, 수면패턴 등 건강 설문을 통해 개인의 몸 상태에 맞는 나만을 위한
                영양제를 추천합니다.
              </p>
            </div>
            <div className="my-4 px-16 w-full overflow-hidden lg:w-1/2 order-1 lg:order-2">
              <div className="w-full relative  lg:p-0">
                <Img src="/images/main-image01.png" width={400} height={250} alt="bg image" />
              </div>
            </div>
          </article>
        </div>

        {/* content */}
        <div className={'container py-16 z-0'}>
          <article className="flex flex-wrap -mx-6 overflow-hidden items-center">
            <div className="my-4 px-16 w-full overflow-hidden lg:w-1/2 order-1">
              <div className="w-full relative lg:text-right lg:p-0">
                <Img src="/images/main-image02.png" width={400} height={250} alt="bg image" />
              </div>
            </div>
            <div className="my-4 px-16 w-full overflow-hidden lg:w-1/2 order-2">
              <h2 className="text-3xl lg:text-4xl leading-snug font-normal mb-4">
                <b className="text-primary-600 font-extrabold">단일 성분</b> 제제
              </h2>
              <p className="text-base lg:text-lg">
                일반적으로 종합 영양제 또는 2~3종의 영양소가 혼합된 영양제를 섭취하여 특정 성분의 오남용 또는 과부족을
                초래합니다. 비타메이트는 이런 문제를 해결하기 위해 단일 성분만으로 제조하여 내 몸에 꼭 맞는 영양소를
                섭취하도록 돕습니다.
              </p>
            </div>
          </article>
        </div>
        {/* content */}
        <div className={'container pb-16 z-0 relative'}>
          {/* bg */}
          <article className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <span className="inline-block absolute -bottom-24 right-16" style={{ zIndex: -1 }}>
                <Img src="/images/circle-border-gray.svg" width={250} height={250} alt="bg image" />
              </span>
            </div>
          </article>
          <article className="flex flex-wrap -mx-6 overflow-hidden items-center">
            <div className="my-4 px-16 w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl leading-snug font-normal mb-4">
                <b className="text-primary-600 font-extrabold">상시 고객</b> 관리
              </h2>
              <p className="text-base lg:text-lg">
                비타메이트는 고객의 영양제 섭취를 꾸준히 할 수 있도록 지원하고 있습니다. 고객이 원하는 시간에 알람
                서비스를 제공하며, 모바일 또는 웹사이트에서 섭취체크를 진행 할 수 있습니다.
              </p>
            </div>

            <div className="my-4 px-16 w-full overflow-hidden lg:w-1/2 order-1 lg:order-2">
              <div className="w-full relative  lg:p-0">
                <Img src="/images/main-image03.png" width={400} height={250} alt="bg image" />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* section last */}
      <section className={'container px-6 py-16 lg:py-28 lg:px-0 z-0 relative'}>
        <article>
          <div className="text-center mb-12">
            <p className="text-base lg:text-lg mb-4">50가지 DNA 분석 & 30여가지 건강 설문 분석</p>
            <h2 className="text-3xl lg:text-4xl leading-snug lg:leading-snug font-normal">
              당신에게 딱 맞는 <b className="font-extrabold">맞춤 영양제</b>를
              <br />
              정기구독 해보세요
            </h2>
          </div>

          {/* lg screen */}
          <div
            className=" hidden lg:block relative w-full bg-contain bg-no-repeat bg-top"
            style={{ backgroundImage: 'url(/images/img-main-serviceflow.svg)', height: '36vh' }}
          ></div>

          {/* sm screen */}
          <div className="block lg:hidden text-center">
            <span className="relative">
              <Img src="/images/img-main-serviceflow-m.svg" width={335} height={1280} alt="서비스 흐름" />
            </span>
          </div>
        </article>
      </section>
    </>
  )
}
