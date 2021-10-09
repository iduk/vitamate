import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import Img from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import Modal from 'components/Modal'
import CreditcardSetup from './creditcard-setup'

export default function Payment() {
  const [isPay, setIsPay] = useState(false)

  const payList = [
    {
      useDate: '2020-09-09',
      types: '결제',
      useTitle: '01회차',
      mod: '', // 적립 +, 차감 -
      cash: '1,000',
    },
    {
      useDate: '2019-09-11',
      types: '취소',
      useTitle: '2019년 09월 정기 결제 금액',
      mod: '-',
      cash: '500',
    },
    {
      useDate: '2017-01-26',
      useTitle: '이벤트 상품 구매',
      mod: '',
      cash: '999,909',
    },
  ]

  return (
    <ContainerAside>
      <h1 className="page-title _sub">결제 관리</h1>
      <article className="mt-8">
        <h2 className="pb-4 font-bold text-xl">결제 정보</h2>
        <Link href="#">
          <a onClick={() => setIsPay(true)} className={'credit-card'}>
            <span>
              <Img src="/images/ic-cardadd.svg" width={72} height={72} alt="card image" />
            </span>
            <p>카드 등록</p>
          </a>
        </Link>
      </article>

      <ul className="mt-10 border-b border-gray-200 overflow-hidden">
        {payList.map((pay, id) => (
          <li key="id" className="py-6 grid grid-cols-2 items-end place-content-between border-t border-gray-200">
            <div>
              <h6 className="text-base text-gray-400 mb-2">{pay.useDate}</h6>
              <p className="text-lg leading-snug">
                <span className={`${pay.mod === '-' && 'text-gray-400'} mr-2`}>
                  [{pay.mod === '' ? '결제' : '취소'}]
                </span>
                {pay.useTitle}
              </p>
            </div>
            {/* ------- 포인트 적립,차감에 따라 폰트색상변경 ------- */}
            <div className="flex justify-end items-center text-gray-500">
              <span
                className={'text-2xl font-normal leading-snug ' + (pay.mod === '' ? 'text-gray-700' : 'text-gray-400')}
              >
                {pay.mod} {pay.cash}
              </span>

              <span className="text-xl text-gray-300 leading-none ml-2">원</span>
              <Link href="#">
                <a className="px-2">
                  <Img src="/images/ic-arrow-next-gray.svg" width={30} height={30} alt="right icon" />
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <Modal title="카드 등록" onClose={() => setIsPay(false)} show={isPay} size="sm">
        <CreditcardSetup />
      </Modal>
    </ContainerAside>
  )
}
