import Link from 'next/link'
import Img from 'next/image'
import { useState } from 'react'
import TextInput from 'components/Forms/TextInput'

export default function Unsubscribe() {
  return (
    <>
      <div className="mb-10">
        <CancelPlanMonthly />
      </div>
      <div className="mb-10">
        <CancelPlanYearly />
      </div>
    </>
  )
}

// 월간 구독 취소시
const CancelPlanMonthly = () => {
  return (
    <section className="rounded-lg py-10 px-4 lg:p-10 bg-gray-100 flex flex-col items-center justify-between text-center">
      <div className="w-full max-w-lg">
        <span className="block mb-5">
          <Img src={'/images/ic-check.svg'} width={56} height={56} alt="icon" />
        </span>
        <h2 className="text-2xl font-normal mb-4">구독이 취소되었습니다</h2>
        <p className="text-sm text-gray-500 px-8 lg:px-0">
          다음 달 결제부터 취소되어 배송이 중지됩니다. <br />
          당월 결제 취소는 고객 센터에 문의바랍니다.
        </p>

        <div className="mx-6 lg:mx-0">
          <article className="p-8 my-6 bg-white text-center">
            <h3 className="font-normal mb-3">구독 취소 이력</h3>
            <p className="font-bold text-2xl text-black">
              <span>2021.09.09 18:18:18</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

// 연간 구독(약정) 취소시
const CancelPlanYearly = () => {
  return (
    <section className="rounded-lg py-10 px-4 lg:p-10 bg-gray-100 flex flex-col items-center justify-between text-center">
      <div className="w-full max-w-lg">
        <span className="block mb-5">
          <Img src={'/images/ic-error.svg'} width={56} height={56} alt="icon" />
        </span>
        <h2 className="text-2xl font-normal mb-4">구독 취소 시 위약금이 발생할 수 있습니다</h2>
        <p className="text-sm text-gray-500 px-8 lg:px-0">
          고객님은 <span>2년 약정 (24개월)중, 총 12회차 구독</span>을 진행하였습니다. 구독 취소 시, 약정 할인된 20%
          비용에 대하여 다음과 같은 위약금이 발생합니다
        </p>

        <div className="mx-6 lg:mx-0">
          <article className="p-8 my-6 bg-white text-center">
            <h3 className="font-normal mb-3">위약금 금액</h3>
            <p className="font-bold text-2xl text-secondary-600">
              <span>120,000</span>
              <span>원</span>
            </p>
          </article>

          <table className="w-full text-sm text-gray-600 bg-gray-200 mb-10">
            <thead className="text-left">
              <tr>
                <td className="px-5 py-3 border-b border-r border-gray-300" rowSpan="3">
                  횟수
                </td>
                <td className="px-5 py-3 border-b border-r border-gray-300" rowSpan="3">
                  할인금액
                </td>
                <td className="px-5 py-3 border-b border-gray-300" rowSpan="3">
                  할인전금액
                </td>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td className="text-sm px-5 py-3 border-r border-gray-300">
                  <p>
                    <span>1</span>회
                  </p>
                  <p className="py-2">
                    <span>1</span>회
                  </p>
                  <p>
                    <span>1</span>회
                  </p>
                </td>
                <td className="text-sm px-5 py-3 border-r border-gray-300">
                  <p>
                    <span>2,000</span>원
                  </p>
                  <p className="py-2">
                    <span>2,000</span>원
                  </p>
                  <p>
                    <span>2,000</span>원
                  </p>
                </td>
                <td className="text-sm px-5 py-3">
                  <p>
                    <span>30,500</span>원
                  </p>
                  <p className="py-2">
                    <span>30,500</span>원
                  </p>
                  <p>
                    <span>30,500</span>원
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="pb-4">
            <h4 className="font-light text-gray-600 leading-normal pb-4">
              취소를 완료하시려면 아래 빈칸에
              <br />
              <span className="text-black font-normal">'취소에 따른 위약금 발생을 확인하였습니다'</span> 를 입력해
              주세요
            </h4>
            <TextInput className="p-4 text-lg" type="text" placeholder="취소에 따른 위약금 발생을 확인하였습니다" />
          </div>
          <button className="w-full p-4 rounded text-xl text-white bg-primary-600 hover:bg-primary-700">
            구독 취소 진행하기
          </button>
        </div>
      </div>
    </section>
  )
}
