import ContainerFluid from 'components/Layouts/ContainerFluid'
import Link from 'next/link'
import Img from 'next/image'
import { useState } from 'react'
import Modal from 'components/Modal'
import ProductItems from 'components/ProductItems'
import { ProductData } from 'components/data'

// data
export const getStaticProps = async () => {
  return {
    props: {
      prodItemList: ProductData,
    },
  }
}

export default function Products({ prodItemList }) {
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
          {prodItemList.map((Item) => (
            <article
              key={Item.id}
              className={
                'rounded-large border border-gray-100 p-8 shadow transition-shadow hover:shadow-lg flex flex-col justify-between h-80'
              }
            >
              <div className="flex items-center justify-between">
                <div className="inline-block">
                  <h6 className="text-2xl leading-snug mb-1">{Item.name}</h6>

                  <div className="text-sm leading-normal text-gray-500">
                    <p>{Item.property}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 inline-block ml-4 mr-0">
                  <span
                    className="thumb lg:thumb-medium thumb-small bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${Item.thumbImage})`,
                    }}
                  ></span>
                </div>
              </div>

              <ul className="product-list text-base leading-normal lg:text-base lg:leading-normal overflow-hidden my-4">
                <li className="flex">
                  <span className="bullet relative inline-block w-6">
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  <p>{Item.content[0]}</p>
                </li>
                <li className={`${!Item.content[1] ? 'hidden' : 'flex'}`}>
                  <span className="bullet relative inline-block w-6">
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  <p>{Item.content[1]}</p>
                </li>
                <li className={`${!Item.content[2] ? 'hidden' : 'flex'}`}>
                  <span className="bullet relative inline-block w-6">
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  <p>{Item.content[2]}</p>
                </li>
              </ul>

              <div>
                <button
                  onClick={showModal}
                  className="w-full p-3 rounded-md text-primary-600 border border-primary-600 hover:bg-primary-600 hover:text-white transition-all"
                >
                  상세보기
                </button>
              </div>
            </article>
          ))}

          <Modal onClose={(e) => setIsShowing(false)} show={isShowing} size={'md'}>
            <ProductItems />
          </Modal>
        </section>
      </div>
    </ContainerFluid>
  )
}
