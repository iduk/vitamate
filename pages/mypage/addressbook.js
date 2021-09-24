import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import { useState } from 'react'

export default function Addressbook() {
  const [isSelected, setIsSelected] = useState(false)

  const addressData = [
    {
      addressName: '강남 아파트1',
      zipcode: '04348',
      address: '서울특별시 강남구 테헤란로 33길 에라타워 18-19',
      tel: '02-0000-0000',
    },
    {
      addressName: '국립한글박물관',
      zipcode: '04348',
      address: '서울특별시 용산구 이태원로55길 3-10(한남동)',
      tel: '02-0000-0000',
    },
  ]

  return (
    <ContainerAside>
      <h1 className="page-title _sub">배송지 관리</h1>

      <article>
        {addressData.map((data, id) => (
          <Link key={id} href="#">
            <a
              onClick={() => setIsSelected(!isSelected)}
              className={`${
                isSelected === true ? 'border-gray-600 shadow' : null
              } grid place-content-between mt-6 p-6 border border-gray-300 rounded-lg transition duration-200 ease-in-out`}
            >
              <dl>
                <dt className="mb-2 flex justify-between items-center text-xl leading-none font-bold">
                  {/* -- 기본배송지 표기 -- */}
                  <span>{data.addressName}</span>
                  <div>
                    <span className="mb-1 inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none text-primary-600 border border-primary-600 rounded">
                      기본배송지
                    </span>
                  </div>
                </dt>
                <dd className="text-lg">
                  <span className="text-primary-600 mr-2">{data.zipcode}</span>
                  {data.address}
                </dd>
                <dd className="flex items-center text-gray-600 mt-2">
                  <span className="text-gray-400 text-sm mr-2">연락처</span>
                  {data.tel}
                </dd>
                <dd className="mt-4">
                  <button className="py-1 px-4 rounded border text-base border-gray-300 text-gray-600 hover:bg-gray-100">
                    수정
                  </button>
                </dd>
              </dl>
            </a>
          </Link>
        ))}
      </article>

      <div className="flex justify-end my-6">
        {/* ---- 기본배송지등록,신규배송지등록 ---- */}
        <div>
          <button className="btn border border-primary-600 text-primary-600 hover:border-primary-700 hover:text-primary-700 hover:shadow">
            기본 배송지로 등록
          </button>
          <button className="btn bg-primary-600 text-white hover:bg-primary-700 ml-3">신규 배송지 등록</button>
        </div>
      </div>
    </ContainerAside>
  )
}
