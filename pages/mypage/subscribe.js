import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import Img from 'next/image'
import { useEffect, useState } from 'react'
import { withRouter } from 'next/router'

function Subscribe({ router }) {
  const {
    query: { tab },
  } = router

  const isTabOne = tab === '1' || tab == null
  const isTabTwo = tab === '2'

  return (
    <ContainerAside>
      <h1 className="page-title _sub">구독 관리</h1>
      <div className="flex border-b border-gray-200">
        <Link href={{ pathname: '/mypage/subscribe', query: { tab: '1' } }}>
          <a className={`${isTabOne ? 'active text-black' : 'text-gray-500'} tab px-1 py-4 mr-3 text-lg`}>구독</a>
        </Link>
        <Link href={{ pathname: '/mypage/subscribe', query: { tab: '2' } }}>
          <a className={`${isTabTwo ? 'active text-black' : 'text-gray-500'} tab px-1 py-4  mr-3 text-lg`}>해지</a>
        </Link>
      </div>

      <section className="mt-8">
        {isTabOne && <TabOne />}
        {isTabTwo && <TabTwo />}
      </section>
    </ContainerAside>
  )
}
export default withRouter(Subscribe)

const TabOne = () => {
  return (
    <section className="flex justify-between">
      <article className="w-full lg:w-auto">
        <h2 className="text-xl">
          <span>이병윤</span>님을 위한 맞춤 추천 상품!
        </h2>
      </article>

      <aside className="hidden lg:block product-cart w-1/3 p-5 bg-gray-100 rounded-md">
        <h2 className="text-base">구독 예정 상품</h2>
        <ul>
          <li className="flex flex-1 my-6">
            <span className="thumb">
              <Img
                className="rounded-md"
                src="https://images.pexels.com/photos/2622186/pexels-photo-2622186.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                width={50}
                height={50}
                alt="상품 이미지"
              />
            </span>
            <dl className="ml-4">
              <dt className="text-xs text-gray-500">다노 이뮨멀티비타민</dt>
              <dd classNam="text-lg pt-3">
                <span>999,979</span>원
              </dd>
            </dl>
          </li>
        </ul>
      </aside>
    </section>
  )
}

const TabTwo = () => {
  return (
    <div>
      <p>나는 탭2222입니다</p>
    </div>
  )
}
