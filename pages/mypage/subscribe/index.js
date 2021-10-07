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
    thumbImg: '/images/product-bio.png',
    name: '프로바이옴메이트',
    property: '300mg 1캡슐',
    content: '유익균 증식과 유해균 억제, 장건강 개선',
    price: '7,500',
    listPrice: '9,000',
  },
  {
    thumbImg: '/images/product-lutein.png',
    name: '루테인메이트',
    property: '150mg 1캡슐',
    content: '눈 건강 개선에 도움',
    price: '8,000',
    listPrice: '9,500',
  },
  {
    thumbImg: '/images/product-magnesium.png',
    name: '마그네슘메이트',
    property: '1000mg 1정',
    content: '인체 에너지 이용, 신경과 근육 기능 유지에 필요',
    price: '8,000',
    listPrice: '9,500',
  },
  {
    thumbImg: '/images/product-omega.png',
    name: '오메가메이트',
    property: '760mg 2캡슐',
    content: '혈행 개선에 도움, 기억력 개선, 눈 건강 개선에 도움',
    price: '8,000',
    listPrice: '9,500',
  },
  {
    thumbImg: '/images/product-Q10.png',
    name: '코엔자임메이트',
    property: '300mg 1캡슐',
    content: '고혈압 개선에 도움, 항산화효과',
    price: '8,000',
    listPrice: '9,500',
  },
  {
    thumbImg: '/images/product-theanine.png',
    name: '테아닌메이트',
    property: '1000mg 1정',
    content: '긴장 완화에 도움',
    price: '8,000',
    listPrice: '9,500',
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

  return (
    <div>
      <section className="w-full">
        <article className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span>이병윤</span>님을 위한 <br />
              알고리즘 추천 영양제!
            </h2>
            <p className="text-sm text-primary-600">*1년 이상 약정 선택시 유전자검사 비용 전액을 페이백 해드립니다 </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select options={paymentType} />
            <Select options={paymentType_a} />
          </div>
        </article>

        <ul className="mt-5">
          {productData.map((product, id) => (
            <li key={id} className={'flex py-5 border-b border-gray-200 relative'}>
              <Link href="#">
                <a
                  onClick={() => setShowModal(true)}
                  className="thumb thumb-large border overflow-hidden relative flex-shrink-0"
                >
                  <Img className="rounded-md" src={product.thumbImg} layout="fill" alt={product.name} />
                </a>
              </Link>
              <dl className="ml-8 py-2 flex-1">
                <dt className="text-xl flex align-items-center">
                  <p>{product.name}</p>
                  <div className="grid place-content-center ml-2">
                    <span className="px-1 py-1 text-xs font-bold leading-none text-primary-600 border border-primary-600 rounded">
                      구독중
                    </span>
                  </div>
                </dt>
                <dd className="text-sm my-1">{product.property}</dd>
                <dd className="text-base text-gray-400 mb-3">{product.content}</dd>
                <dd>
                  <div className="flex items-baseline">
                    <p className="text-lg font-bold">
                      <span>{product.price}</span>원
                    </p>
                    <p className={'text-base ml-2 line-through text-gray-400'}>
                      <span>{product.listPrice}</span>원
                    </p>
                  </div>
                </dd>
              </dl>
              <div className="flex-shrink-0 flex items-center justify-end lg:ml-5">
                {toCart === true ? (
                  <button
                    onClick={() => setToCart(!toCart)}
                    className={'btn border border-gray-300 text-gray-400 hover:bg-gray-50'}
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
                      className={'btn border border-primary-600 text-primary-600 hover:bg-primary-100'}
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

        <article className="my-10 p-6 h-auto rounded-lg bg-primary-100">
          <h2 className="text-xl mb-6">그 밖의 훌륭한 상품!</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productData.map((product, id) => (
              <li key={id} className="rounded-large bg-white p-8">
                <div className="flex justify-between">
                  <div className="w-full">
                    <h6 className="text-xl font-bold leading-snug">{product.name}</h6>
                    <p className="text-sm">{product.property}</p>
                    <div className="flex items-baseline mt-3">
                      <p className="text-lg font-bold">
                        <span>{product.price}</span>원
                      </p>
                      <p className={'text-base ml-3 line-through text-gray-400'}>
                        <span>{product.listPrice}</span>원
                      </p>
                    </div>
                  </div>
                  <div className="ml-8 flex-shrink-0">
                    <span
                      className="thumb bg-cover bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url(${product.thumbImg})`,
                      }}
                    ></span>
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
              <span>2</span>개<span className="px-2">/</span>
              <span>19,600</span>원
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className={'font-bold'}>약정기간</h6>
            <p>1년</p>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className={'font-bold'}>할인금액</h6>
            <p>
              <span>10,000</span>원
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className={'font-bold'}>매월 지불 금액</h6>
            <p className="text-xl font-bold text-primary-600">
              <span>10,000</span>원
            </p>
          </div>
        </article>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Link href="#">
              <a className="block py-4 ml-0 mr-auto text-gray-600 underline hover:text-black text-lg">
                정기구독을 <b>일시 중지</b>하시겠습니까? <br />
              </a>
            </Link>
            <p className="text-xs text-gray-600">
              ※ 정기 구독 회원에 한해 구독 일시 중지가 가능하며, 1회 일시 중지 기간은 1개월 단위이며, 구독 일시 중지
              횟수에는 제한이 없습니다.
            </p>
          </div>
          <div className="text-right">
            <button className="rounded px-6 py-4 w-full lg:w-56 bg-primary-600 text-white text-lg">결제하기</button>
          </div>
        </div>
      </footer>

      <Modal title={'제품보기'} onClose={() => setShowModal(false)} show={showModal} size={'md'}>
        <div>
          {/* content */}
          <ProductItems />

          {/* footer */}
          <footer className="mt-8 flex justify-between flex-row items-end">
            <div className="w-2/5 mr-3">
              <button className="w-full py-4 px-3 rounded border border-primary-600 text-primary-600 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50">
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
