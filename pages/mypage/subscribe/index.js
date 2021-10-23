import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import Img from 'next/image'
import { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import Modal from 'components/Modal'
import Select from 'components/Forms/Select'

import ProductItems from 'components/ProductItems'
import Unsubscribe from './unsubscribe'

// 구독 상품
const productData = [
  {
    id: 0,
    name: '오메가메이트',
    property: '760mg 2캡슐',
    thumbImage: '/images/product-bio.png',
    content: ['혈행 개선에 도움', '기억력 개선', '눈 건강 개선에 도움'],
    price: '20,000',
    listPrice: '30,000',
  },
  {
    id: 1,
    name: '루테인메이트',
    property: '150mg 1캡슐',
    thumbImage: '/images/product-lutein.png',
    content: ['눈 건강 개선에 도움'],
    price: '20,000',
    listPrice: '30,000',
  },
  {
    id: 2,
    name: '프로바이옴메이트',
    property: '300mg 1캡슐',
    thumbImage: '/images/product-lutein.png',
    content: ['유익균 증식과 유해균 억제', '장건강 개선'],
    price: '20,000',
    listPrice: '30,000',
  },
  {
    id: 3,
    name: '코엔자임메이트',
    property: '300mg 1정',
    thumbImage: '/images/product-Q10.png',
    content: ['고혈압 개선에 도움', '힝산화 효과'],
    price: '20,000',
    listPrice: '30,000',
  },
  {
    id: 4,
    name: '마그네슘메이트',
    property: '1000mg 1정',
    thumbImage: '/images/product-magnesium.png',
    content: ['인체 에너지 이용', '신경과 근육 기능 유지에 필요'],
    price: '15,000',
    listPrice: '20,000',
  },
  {
    id: 5,
    name: '테아닌메이트',
    property: '1000mg 1정',
    thumbImage: '/images/product-theanine.png',
    content: ['긴장 완화에 도움'],
    price: '15,000',
    listPrice: '20,000',
  },
]

const productList = [
  {
    id: 0,
    productName: 'B메이트',
    productTake1: '640mg 1정',
    productImg:
      'https://images.pexels.com/photos/3683036/pexels-photo-3683036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    productEff1: '체내 에너지 생성과 각종 대사에 필요',
    productEff2: '8가지 종류의 비타민B 성분',
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

const paymentDay = [
  { id: 'paymentday-a1', value: 'paymentday-a1', label: '매월 결제일' },
  { id: 'paymentday-a2', value: 'paymentday-a2', label: '5일' },
  { id: 'paymentday-a3', value: 'paymentday-a3', label: '10일' },
  { id: 'paymentday-a4', value: 'paymentday-a4', label: '15일' },
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
  const [showModal, setShowModal] = useState(false)
  const [toCart, setToCart] = useState(false)

  const isShowing = (e) => {
    e.preventDefault()
    setShowModal({ ...showModal, id: e.target.id })
  }

  const productData1 = productData.slice(0, 4)
  const productData2 = productData.slice(-2)

  return (
    <div>
      <section className="w-full">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl leading-normal font-bold mb-4">
              <span>김태훈</span>님을 위한 <br />
              알고리즘 추천 영양제
            </h2>
            <p className="text-sm text-primary-600">1년 이상 약정 선택 시 유전자 검사 비용 전액을 페이백 해드립니다.</p>
            <p className="text-sm text-primary-600">단, ‘알고리즘 추천영양제’ 를 모두 선택한 경우에 한 합니다.</p>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 lg:grid-rows-none lg:grid-cols-3 gap-3">
            <Select options={paymentType} />
            <Select options={paymentType_a} />
            <div className="col-span-2 lg:col-auto">
              <Select options={paymentDay} />
            </div>
          </div>
        </article>

        <ul className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productData1.map((product, id) => (
            <li key={id} className="rounded-large bg-white p-8 border border-gray-200">
              <div className="flex justify-between">
                <div className="w-full">
                  <div className="flex items-center">
                    <h6 className="text-xl font-bold leading-snug mr-2">{product.name}</h6>
                    <span className="px-1 py-1 text-xs font-bold leading-none text-primary-600 border border-primary-600 rounded mb-1">
                      구독중
                    </span>
                  </div>
                  <div className="grid place-content-center ml-2"></div>
                  <p className="text-sm">{product.property}</p>
                  <div className="block lg:flex items-baseline mt-3">
                    <p className="text-base lg:text-lg font-bold">
                      <span>{product.price}</span>원
                    </p>
                    <p className={'text-sm lg:ml-3 line-through text-gray-400'}>
                      <span>{product.listPrice}</span>원
                    </p>
                  </div>
                </div>
                <div className="ml-4 ">
                  <span className="relative rounded-xl">
                    <Img src={product.thumbImage} width={120} height={120} alt="" />
                  </span>
                </div>
              </div>

              <div className="text-base leading-normal text-gray-500 mt-6 overflow-hidden">
                <p className="h-11">{product.content}</p>
              </div>

              <div className="flex-shrink-0 grid lg:flex items-center lg:justify-end lg:ml-5 mt-3 lg:mt-0">
                {toCart === true ? (
                  <button
                    onClick={() => setToCart(!toCart)}
                    className="w-full p-3 rounded-md border border-gray-300 text-gray-400 hover:bg-gray-50 transition-all"
                  >
                    <>
                      <span className="pr-2">-</span>
                      <span>구독취소</span>
                    </>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setToCart(!toCart)}
                      className="w-full p-3 rounded-md text-primary-600 border border-primary-600 hover:bg-primary-600 hover:text-white transition-all"
                    >
                      <span className="pr-2">+</span>
                      <span>구독하기</span>
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>

        <hr className="lg:-mx-16 border-gray-200 mt-16 mb-8" />

        <article className="py-10 h-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="text-highlight">함께 섭취하면 좋은 영양제</span>
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productData2.map((product, id) => (
              <li key={id} className="rounded-large p-8 border border-gray-200">
                <div className="flex justify-between">
                  <div className="w-full">
                    <h6 className="text-xl font-bold leading-snug">{product.name}</h6>
                    <p className="text-sm">{product.property}</p>
                    <div className="block lg:flex items-baseline mt-3">
                      <p className="text-base lg:text-lg font-bold">
                        <span>{product.price}</span>원
                      </p>
                      <p className={'text-sm lg:ml-3 line-through text-gray-400'}>
                        <span>{product.listPrice}</span>원
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 ">
                    <span className="relative rounded-xl">
                      <Img src={product.thumbImage} width={120} height={120} alt="" />
                    </span>
                  </div>
                </div>

                <div className="text-base leading-normal text-gray-500 mt-6 overflow-hidden">
                  <p className="h-11">{product.content}</p>
                </div>

                <div className="mt-6">
                  <button
                    onClick={isShowing}
                    className="w-full p-3 rounded-md text-primary-600 border border-primary-600 hover:bg-primary-600 hover:text-white transition-all"
                  >
                    <span className="pr-2">+</span>
                    <span>구독하기</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <footer>
        {/* ----- 정산 ----- */}
        <article className="w-full p-5 bg-gray-100 rounded-md lg:flex-shrink-0 lg:shadow">
          <div className="flex justify-between">
            <h6 className={'font-bold'}>총 구독상품</h6>

            <p>
              <span>4</span>개<span className="px-2">/</span>
              <span>80,000</span>원
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className={'font-bold'}>약정기간</h6>
            <p>2년</p>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className={'font-bold'}>할인금액</h6>
            <p>
              <span>6,000</span>원
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className={'font-bold'}>매월 지불 금액</h6>
            <p className="text-xl font-bold text-primary-600">
              <span>74,000</span>원
            </p>
          </div>
        </article>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="block py-2 ml-0 mr-auto text-gray-700 text-lg">주문할 영양제를 한꺼번에 받기를 원하십니까?</p>
            <p className="text-xs text-gray-600">
              ※ 비타메이트는 매달 1개월분의 영양제를 배송합니다. <br />
              만약 한꺼번에 배송받기를 원하실 경우 고객센터로 연락주시기 바랍니다.
            </p>
          </div>
          <div className="text-right">
            <button className="rounded px-6 py-4 w-full lg:w-56 bg-primary-600 text-white text-lg">결제하기</button>
          </div>
        </div>
      </footer>

      <Modal onClose={() => setShowModal(false)} show={showModal} size={'md'}>
        <div>
          {/* content */}
          <ProductItems />

          {/* footer */}
          <footer className="mt-8 flex justify-between flex-row items-end">
            <div className="w-2/5 mr-3">
              <button className="w-full py-4 px-3 rounded border border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-100">
                구독취소
              </button>
            </div>
            <div className="w-3/5">
              <button className="w-full py-4 px-3 rounded border border-primary-600 flex-shrink-0  bg-primary-600 text-white hover:bg-primary-700 hover:border-primary-700">
                구독하기
              </button>
            </div>
          </footer>
        </div>
      </Modal>
    </div>
  )
}

const TabTwo = () => {
  return <Unsubscribe />
}
