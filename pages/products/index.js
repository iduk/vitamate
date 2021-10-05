import ContainerFluid from 'components/Layouts/ContainerFluid'
import Link from 'next/link'
import Img from 'next/image'
import { useState } from 'react'
import Modal from 'components/Modal'
import ProductItems from 'components/ProductItems'

const productList = [
  {
    id: 0,
    productName: 'B메이트',
    productTake1: '640mg 1정',
    productTake2: '30일 (하루 1회 복용)',
    productImg:
      'https://images.pexels.com/photos/3683036/pexels-photo-3683036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    productEff1: '체내 에너지 생성과 각종 대사에 필요',
    productEff2: '8가지 종류의 비타민B 성분',
  },
  {
    id: 1,
    productName: 'C메이트',
    productTake1: '800mg 2정',
    productTake2: '30일 (하루 2회 복용)',
    productImg:
      'https://images.pexels.com/photos/3683049/pexels-photo-3683049.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    productEff1: '활성산소로부터 세포 보호',
    productEff2: '면역 개선',
  },
  {
    id: 2,
    productName: 'D메이트',
    productTake1: '300mg 1정',
    productTake2: '30일 (하루 1회 복용)',
    productImg:
      'https://images.pexels.com/photos/7745348/pexels-photo-7745348.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    productEff1: '뼈 형성과 유지에 관여',
    productEff2: '골다공증 예방',
  },
  {
    id: 3,
    productName: '마그네슘메이트',
    productTake1: '1000mg 1정',
    productTake2: '30일 (하루 1회 복용)',
    productImg:
      'https://images.pexels.com/photos/9742885/pexels-photo-9742885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    productEff1: '인체 에너지에 이용',
    productEff2: '신경과 근육 기능 유지에 필요',
  },
  {
    id: 3,
    productName: '아연메이트',
    productTake1: '300mg 1정',
    productTake2: '30일 (하루 1회 복용)',
    productImg:
      'https://images.pexels.com/photos/2080544/pexels-photo-2080544.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    productEff1: '면역에 관여',
    productEff2: null,
  },
  {
    id: 4,
    productName: '코엔자임메이트',
    productTake1: '300mg 1정',
    productTake2: '30일 (하루 1회 복용)',
    productImg:
      'https://images.pexels.com/photos/42230/teddy-teddy-bear-association-ill-42230.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    productEff1: '고혈압 개선에 도움',
    productEff2: '항산화효과',
  },
]

export default function Products() {
  const [isShowing, setIsShowing] = useState(false)

  const showModal = (e) => {
    e.preventDefault()
    setIsShowing({ ...isShowing, id: e.target.id })
  }

  return (
    <ContainerFluid>
      <div className={'container px-6 py-12 lg:px-0 lg:py-24'}>
        <h1 className="page-title">영양제 소개</h1>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productList.map((item) => (
            <article
              key={item.id}
              className="rounded-large border border-gray-100 p-8 shadow transition-shadow hover:shadow-lg flex flex-col justify-between"
            >
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="text-xl font-bold leading-snug mb-3">{item.productName}</h6>

                  <div className="text-sm leading-normal text-gray-500 h-11 overflow-hidden">
                    <p className="ellipsis">{item.productTake1}</p>
                    <p className="ellipsis">{item.productTake2}</p>
                  </div>
                </div>
                <div className="ml-8 flex-shrink-0">
                  <span
                    className="thumb bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${item.productImg})`,
                    }}
                  ></span>
                </div>
              </div>

              <ul className="product-list text-lg leading-relaxed pt-6">
                <li>
                  <span className={'mr-3'}>
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  {item.productEff1}
                </li>
                <li>
                  <span className={`mr-3 ${item.productEff2 === null && 'hidden'}`}>
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  {item.productEff2}
                </li>
              </ul>

              <div className="mt-6">
                <button
                  onClick={showModal}
                  className="w-full p-3 rounded-md text-primary-600 border border-primary-600 hover:bg-primary-600 hover:text-white transition-all"
                >
                  상세보기
                </button>
              </div>
            </article>
          ))}

          <Modal title={'C메이트'} onClose={(e) => setIsShowing(false)} show={isShowing} size={'md'}>
            <ProductItems />
          </Modal>
        </section>
      </div>
    </ContainerFluid>
  )
}
