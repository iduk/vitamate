import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import Img from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import Modal from 'components/Modal'
import CreditcardSetup from './creditcard-setup'
import PaymentReceipt from './payment-receipt'

export default function Payment() {
  const [isPay, setIsPay] = useState(false)
  const [isReceipt, setIsReceipt] = useState(false)

  const payList = [
    {
      useDate: '2020-09-09',
      types: '결제',
      useTitle: '01회차',
      mod: '', // 적립 +, 차감 -
      cash: '74,000',
    },
    {
      useDate: '2019-09-11',
      types: '취소',
      useTitle: '2019년 09월 정기 결제 금액',
      mod: '-',
      cash: '50,000',
    },
    {
      useDate: '2017-01-26',
      useTitle: '이벤트 상품 구매',
      mod: '',
      cash: '100,000',
    },
  ]

  const title = {
    isPay: '카드 등록/변경',
    isReceipt: '결제 내역 상세',
  }

  return (
    <ContainerAside>
      <h1 className="page-title _sub">결제 관리</h1>
      <article className="my-8">
        <h2 className="pb-4 font-bold text-xl">결제 정보</h2>

        {/* 시연 후, 바로아래 div는 벗겨내야함 */}

        {/* 카드 등록 전 */}
        {/* <Link href="#">
          <a onClick={() => setIsPay(true)} className={'credit-card shadow'}>
            <span>
              <Img src="/images/ic-cardadd.svg" width={72} height={72} alt="card image" />
            </span>
            <p>카드 등록</p>
          </a>
        </Link> */}

        {/* 카드 등록 후 */}
        <div onClick={() => setIsPay(true)} className={'credit-card credit-card--action shadow-xl'}>
          <div className="flex justify-between items-center">
            <h6 className="text-lg">카드 정보</h6>
            <Link href="#">
              <a className="relative">
                <Img src="/images/ic-edit.svg" width={28} height={28} alt={'edit'} />
              </a>
            </Link>
          </div>
          <div className="text-left pb-1 mt-8 border-b border-white border-opacity-25">
            <p className="grid grid-cols-4 gap-3 w-40 text-lg font-bold">
              <span>****</span>
              <span>****</span>
              <span>****</span>
              <span>1234</span>
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xs">
              <span className="pr-2">결제일</span>
              <span>매월 15일</span>
            </p>

            {/* <button className="border border-white px-2 py-1 rounded-full text-xs">결제일 변경</button> */}
          </div>
        </div>
      </article>

      <article>
        <h2 className="pb-4 font-bold text-xl border-b border-gray-200">결제 내역</h2>
        {/* 결제 내역 0개일때, 현재 className 'hidden' 처리됨 */}
        <div className="hidden text-center py-12 text-gray-400">결제한 내역이 없습니다.</div>

        {/* 결제 내역 */}
        <ul className="overflow-hidden">
          {payList.map((pay, id) => (
            <li
              key="id"
              className="py-4 lg:py-6 lg:grid lg:grid-cols-2 items-end place-content-between border-b border-gray-200"
            >
              <div className="mb-3 lg:mb-0">
                <h6 className="text-base text-gray-400 mb-1">{pay.useDate}</h6>
                <p className="text-base lg:text-lg leading-snug">
                  <span className={`${pay.mod === '-' && 'text-gray-400'} mr-1`}>
                    [{pay.mod === '' ? '결제' : '취소'}]
                  </span>
                  {pay.useTitle}
                </p>
              </div>

              <div className="flex justify-between lg:justify-end items-center text-gray-500">
                <span
                  className={'text-2xl font-normal leading-snug ' + (pay.mod === '' ? 'text-black' : 'text-gray-400')}
                >
                  {pay.mod} {pay.cash}
                  <i className="not-italic text-base leading-none ml-1">원</i>
                </span>

                <span className="justify-self-end">
                  <Link href="#">
                    <a onClick={() => setIsReceipt(true)} className="p-3">
                      <Img src="/images/ic-arrow-next-gray.svg" width={30} height={30} alt="right icon" />
                    </a>
                  </Link>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <Modal title={title.isPay} onClose={() => setIsPay(false)} show={isPay} size="sm">
        <CreditcardSetup />
      </Modal>
      <Modal title={title.isReceipt} onClose={() => setIsReceipt(false)} show={isReceipt} size="sm">
        <PaymentReceipt />
      </Modal>
    </ContainerAside>
  )
}
