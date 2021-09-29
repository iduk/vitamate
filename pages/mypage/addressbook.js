import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import { useState } from 'react'
import Modal from 'components/Modal'
import TextInput from 'components/Forms/TextInput'
import Select from 'components/Forms/Select'
import Checkbox from 'components/Forms/Checkbox'

export default function Addressbook() {
  const [isSelected, setIsSelected] = useState(false)
  const [showModal, setShowModal] = useState(false)

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

  const tel_type = [
    { id: 'hahaha', value: 'HOHOHO', label: '선택' },
    { id: 'hahaha', value: 'HOHOHO', label: '010' },
  ]

  const handleClickAlert = () => {
    alert("'국립한글박물관'이 기본 배송지로 등록되었습니다.")
  }

  return (
    <ContainerAside>
      <h1 className="page-title _sub">배송지 관리</h1>
      <article>
        {addressData.map((data, id) => (
          <Link key={id} href="#">
            <a
              onClick={() => setIsSelected(!isSelected)}
              className={
                'flex place-content-between mt-6 px-6 py-4 border border-gray-300 rounded-lg transition duration-200 ease-in-out'
              }
            >
              <div className="form-checkbox mr-3 mt-1">
                <input type="checkbox" checked={isSelected === true ? true : false} />
              </div>

              <dl className="w-full">
                <dt className="flex h-8 justify-between items-center text-xl leading-none font-bold">
                  <span>{data.addressName}</span>
                  <div>
                    {/* -- 기본배송지 표기 -- */}
                    {isSelected === true ? (
                      <span className="inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none text-primary-600 border border-primary-600 rounded">
                        기본배송지
                      </span>
                    ) : null}
                  </div>
                </dt>

                <dd className="text-lg mt-3">
                  <span className="text-gray-600 mr-2">[{data.zipcode}]</span>
                  {data.address}
                </dd>
                <dd className="text-base mt-2">
                  <span className="mr-2">수령인</span>
                  <span className="text-gray-500">이병윤</span>
                </dd>
                <dd className="mt-1">
                  <span className="mr-2">연락처</span>
                  <span className="text-gray-500">{data.tel}</span>
                </dd>
                <dd className="mt-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="py-1 px-4 rounded border text-base border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
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
        <button
          onClick={handleClickAlert}
          className="btn border border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-100 hover:shadow mr-3"
        >
          기본 배송지 등록
        </button>
        <button onClick={() => setShowModal(true)} className="btn bg-primary-600 text-white hover:bg-primary-700">
          신규 배송지 등록
        </button>
      </div>

      {/* ---- Show Modal ---- */}
      {/* -------------- 수정시 '신규 배송지 수정' 으로 타이틀 변경 ----------- */}
      <Modal title={'신규 배송지 등록'} onClose={() => setShowModal(false)} show={showModal}>
        <div className="mb-4 p-4 leading-normal text-gray-500 bg-gray-100 rounded-lg" role="alert">
          <p>입력/수정한 배송지는 배송지 목록에 저장됩니다.</p>
        </div>
        <form>
          <div className="form-group">
            <TextInput id="address_name" label="배송지명" placeholder="예) 우리집, 회사" />
          </div>
          <div className="form-group">
            <TextInput id="address_to_user" label="수령인" placeholder="받으시는 분의 이름을 입력해주세요" />
          </div>
          <div className="form-group">
            <div className="flex place-items-end">
              <div className="flex-1 mr-3">
                <TextInput type="text" label="주소 입력" placeholder="주소를 입력해주세요" id="userAddress" />
              </div>
              <div className="flex-0">
                <button className={'btn border border-primary-600 text-primary-600 hover:bg-primary-100'}>
                  주소찾기
                </button>
              </div>
            </div>
            <TextInput type="text" placeholder="나머지 주소를 입력해주세요" id="userAddress2" className="mt-3" />
          </div>

          <div className="form-group">
            <label>연락처</label>
            <ul className="flex justify-between lg:justify-start">
              <li className="w-28 flex-shrink-0">
                <Select options={tel_type} />
              </li>
              <li className="w-full mx-3">
                <TextInput type="tel" placeholder="0000" />
              </li>
              <li className="w-full">
                <TextInput type="tel" placeholder="0000" />
              </li>
            </ul>
          </div>

          <div className="form-group">
            <Checkbox id="address_set" label="기본 배송지로 설정하기" />
          </div>

          <footer className={'mt-8'}>
            <button
              type="submit"
              onClick={() => setShowModal(false)}
              className={'w-full py-5 bg-primary-600 text-white hover:bg-primary-700 text-xl font-bold rounded-md'}
            >
              등록하기
            </button>
          </footer>
        </form>
      </Modal>
    </ContainerAside>
  )
}
