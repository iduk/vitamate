import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import Img from 'next/image'
import { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import Modal from 'components/Modal'
import Select from 'components/Forms/Select'

// 구독 상품
const productData = [
  {
    thumbImg:
      'https://images.pexels.com/photos/4040576/pexels-photo-4040576.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '감마리놀렌산 메이트',
    price: '998,000',
    listPrice: '998,000',
    cartBtn: 'minus',
  },
  {
    thumbImg:
      'https://images.pexels.com/photos/4047070/pexels-photo-4047070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '프로 바이옴 메이트',
    price: '998,000',
    listPrice: '998,000',
    cartBtn: 'plus',
  },
  {
    thumbImg:
      'https://images.pexels.com/photos/4492065/pexels-photo-4492065.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '테아닌메이트',
    price: '998,000',
    listPrice: '998,000',
    cartBtn: 'minus',
  },
]
// 구독 예정 상품
const productEstData = [
  {
    thumbImg:
      'https://images.pexels.com/photos/2622186/pexels-photo-2622186.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '퓨어코어 종합 멀티 비타민 미네랄',
    price: '998,000',
  },
  {
    thumbImg:
      'https://images.pexels.com/photos/2622186/pexels-photo-2622186.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '퓨어코어 종합 멀티 비타민 미네랄',
    price: '998,000',
  },
  {
    thumbImg:
      'https://images.pexels.com/photos/2622186/pexels-photo-2622186.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '퓨어코어 종합 멀티 비타민 미네랄',
    price: '998,000',
  },
]

const paymentType = [
  { id: 'payment-type-a', value: 'payment-type-a', label: '약정 계약' },
  { id: 'payment-type-b', value: 'payment-type-b', label: '정기 결제' },
  { id: 'payment-type-c', value: 'payment-type-c', label: '일반 결제' },
]

const paymentType_a = [
  { id: 'paymentType-a1', value: 'paymentType-a1', label: '1년' },
  { id: 'paymentType-a2', value: 'paymentType-a2', label: '2년' },
  { id: 'paymentType-a3', value: 'paymentType-a3', label: '3년' },
]

const paymentType_b = [{ id: 'paymentType-a1', value: 'paymentType-a1', label: '매월' }]

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
          <a className={`${isTabTwo ? 'disabled active text-black' : 'text-gray-500'} tab px-1 py-4  mr-3 text-lg`}>
            해지
          </a>
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

const TabOne = ({}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex justify-between">
      <section className="w-full">
        <article className="mb-10 lg:mr-10">
          <h2 className="text-xl mb-2">
            <span>이병윤</span>님을 위한 맞춤 추천 상품!
          </h2>

          <ul>
            {productData.map((product, id) => (
              <li key="id" className={'flex py-5 border-b border-gray-200 relative'}>
                <span className="thumb">
                  <Img className="rounded-md" src={product.thumbImg} width={100} height={100} alt={product.name} />
                </span>
                <dl className="ml-5">
                  <dt className="text-base text-gray-500 mb-2">{product.name}</dt>
                  <dd>
                    <div className="flex items-end">
                      <p className="text-xl font-bold">
                        <span>{product.price}</span>원
                      </p>
                      <p className={'text-base ml-3 line-through text-gray-400'}>
                        <span>{product.listPrice}</span>원
                      </p>
                    </div>
                  </dd>
                  <button type="button" className={`cart-btn ${product.cartBtn}`}></button>
                </dl>
              </li>
            ))}
          </ul>
        </article>

        <article className="mb-10 lg:mr-10 p-6 bg-primary-50 h-auto rounded-lg">
          <h2 className="text-xl mb-2">그 밖의 훌륭한 상품!</h2>

          <ul>
            {productData.map((product, id) => (
              <li key="id" className={'flex p-5 relative rounded-lg bg-white mt-4'}>
                <span className="thumb">
                  <Img className="rounded-md" src={product.thumbImg} width={100} height={100} alt={product.name} />
                </span>
                <dl className="ml-5">
                  <dt className="text-base text-gray-500 mb-2">{product.name}</dt>
                  <dd>
                    <div className="flex items-end">
                      <p className="text-xl font-bold">
                        <span>{product.price}</span>원
                      </p>
                      <p className={'text-base ml-3 line-through text-gray-400'}>
                        <span>{product.listPrice}</span>원
                      </p>
                    </div>
                  </dd>
                  <button type="button" className={`cart-btn ${product.cartBtn}`}></button>
                </dl>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <aside className="hidden lg:block w-1/3 p-5 bg-gray-100 rounded-md lg:flex-shrink-0">
        <h2 className="text-base">구독 예정 상품</h2>
        <ul>
          {productEstData.map((product, id) => (
            <li key="id" className="py-3 flex justify-between border-b border-gray-200">
              <Link href="#">
                {/* 기다려, onClick={() => setShowModal(true)} */}
                <a className="flex flex-1">
                  <span className="thumb flex-shrink-0">
                    <Img className="rounded-md" src={product.thumbImg} width={64} height={64} alt={product.name} />
                  </span>
                  <dl className="ml-4">
                    <dt className="text-xs leading-tight text-gray-500 mb-2">{product.name}</dt>
                    <dd>
                      <div className="flex items-end">
                        <p className="text-base font-bold">
                          <span>{product.price}</span>원
                        </p>
                      </div>
                    </dd>
                  </dl>
                </a>
              </Link>
              <div className="flex-shrink-0 flex items-center">
                <button className="relative p-1">
                  <Img src="/images/btn-popup-cancel.svg" width={24} height={24} alt="remove" />
                </button>
              </div>
            </li>
          ))}
          <li className="mt-3">
            <Select options={paymentType} />
          </li>
          <li className="mt-2">
            <Select options={paymentType_a} />
          </li>
        </ul>
        {/* ----- 정산 ----- */}
        <footer>
          <div className="flex justify-between mt-4">
            <h6>총 구독수</h6>
            <span>2개</span>
          </div>
          <div className="flex justify-between mt-2">
            <h6>총 구독가</h6>
            <p>
              <span>19,600</span>원
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <h6>할인금액</h6>
            <p>
              <span>10,000</span>원
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <h6>매월 지불 금액</h6>
            <p className="text-xl font-bold text-primary-600">
              <span>10,000</span>원
            </p>
          </div>
          {/* ---- footer ---- */}
          <div className="mt-6">
            <button className="w-full rounded px-4 py-4 bg-primary-600 text-white text-lg">구독시작</button>
          </div>
        </footer>
      </aside>
      <Modal title={'퓨어코어 종합 멀티 비타민 미네랄'} onClose={() => setShowModal(false)} show={showModal}>
        ㅁㅇㄴㄹㅁㄴㅇㄹㄴㅇ
      </Modal>
    </div>
  )
}

const TabTwo = () => {
  return (
    <div>
      <p>작업예정</p>
    </div>
  )
}
