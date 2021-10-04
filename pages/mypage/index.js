import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import Img from 'next/image'
import { useState, useEffect } from 'react'
import Modal from 'components/Modal'
import TextInput from 'components/Forms/TextInput'

const UserInfo = ({ show }) => {
  const [userEdit, setUserEdit] = useState(false)
  const [isToggleOn, setIsToggleOn] = useState(false)

  return (
    <article className="w-full rounded-large bg-white shadow-lg">
      <ul>
        <li className={'px-8 py-2 h-20 flex justify-between items-center border-b border-gray-200'}>
          <h6 className="w-6/12 font-bold text-lg">내 정보</h6>
          <div className="w-6/12 text-right">
            <button
              onClick={() => setUserEdit(true)}
              className="text-primary-600 px-4 py-2 rounded-md text-sm bg-primary-50 hover:bg-primary-600 hover:text-white transition-all"
            >
              정보 수정
            </button>

            <Modal title="정보 수정" size="md" onClose={() => setUserEdit(false)} show={userEdit}>
              <form>
                <div className="form-group flex justify-between items-end w-full">
                  <TextInput label="휴대폰 번호" id="userPhone" type="text" placeholder="010-0000-0000" disabled />
                  <span className="flex-shrink-0 ml-3">
                    <button className={'btn border border-primary-600 text-primary-600 hover:bg-primary-100'}>
                      변경하기
                    </button>
                  </span>
                </div>

                <div className="form-group flex justify-between items-end w-full">
                  <TextInput label="이메일" id="userEmail" type="text" placeholder="이메일을 입력해주세요" />
                  <span className="flex-shrink-0 ml-3">
                    <button className={'btn border border-primary-600 text-primary-600 hover:bg-primary-100'}>
                      변경하기
                    </button>
                  </span>
                </div>

                <div className="form-group flex justify-between items-end w-full">
                  <TextInput
                    label="기본 배송지"
                    id="addressList"
                    type="text"
                    value="서울특별시 강남구 삼성1동 영동대로 564"
                  />
                  <span className="flex-shrink-0 ml-3">
                    <button className={'btn border border-primary-600 text-primary-600 hover:bg-primary-100'}>
                      변경하기
                    </button>
                  </span>
                </div>

                <div className="form-group">
                  <label className="mb-2">마케팅 동의</label>

                  <div className="form-switch inline-flex shadow-sm rounded-md" role="group">
                    <button className="active" type="button">
                      ON
                    </button>
                    <button type="button">OFF</button>
                  </div>
                  <p className="inline-flex ml-5 text-sm text-gray-500">2021.10.04 12:54</p>
                </div>
                <footer className="mt-6">
                  <button
                    type="submit"
                    onClose={() => setUserEdit(false)}
                    show={userEdit}
                    className={
                      'w-full py-5 bg-primary-600 text-white hover:bg-primary-700 text-xl font-bold rounded-md'
                    }
                    disabled
                  >
                    회원가입
                  </button>
                </footer>
              </form>
            </Modal>
          </div>
        </li>
        {/* ------- 
          disabled 처리시, li className에 'opacity-20' 추가
          ------- */}
        <li className={'opacity-20 px-8 py-2 h-20 flex justify-between items-center border-b border-gray-200'}>
          <div className="flex items-center lg:w-6/12 flex-shrink-0">
            <span className="inline-flex mr-2">
              <Img src="/images/ic-discount.svg" width={24} height={24} alt="icon" />
            </span>
            <span>약정 할인</span>
          </div>

          <div className=" text-right text-gray-600">
            <p>
              <span>정상가</span>
              <span className="ml-3 line-through text-gray-400">288,000원</span>
            </p>
            <p>
              <span>총 할인가</span>
              <span className="ml-3">248,000원 (-20%)</span>
            </p>
          </div>
        </li>
        <li className={'px-8 py-2 h-20 flex justify-between items-center border-b border-gray-200'}>
          <div className="flex items-center">
            <span className="inline-flex flex-shrink-0 mr-2">
              <Img src="/images/ic-card.svg" width={24} height={24} alt="icon" />
            </span>
            <span>매달 결제 금액</span>
          </div>
          <div className="text-right text-gray-600">19,800원</div>
        </li>
        <li className={'px-8 py-2 h-20 flex justify-between items-center border-b border-gray-200'}>
          <div className="flex items-center">
            <span className="inline-flex flex-shrink-0 mr-2">
              <Img src="/images/ic-card.svg" width={24} height={24} alt="icon" />
            </span>
            <Link href="/mypage/point">
              <a className="flex items-center">
                보유 포인트
                <Img src="/images/ic-arrowright.svg" width={32} height={32} alt="arrow icon" />
              </a>
            </Link>
          </div>
          <div className="text-right text-gray-600">500점</div>
        </li>
      </ul>
    </article>
  )
}

const UserBanner = () => {
  return (
    <article className="flex-shrink-0 w-full h-64 mt-6 lg:mt-0 lg:h-80 lg:w-80 rounded-large bg-primary-600 text-white lg:ml-6 relative overflow-hidden user-banner">
      <div className="z-0 absolute inset-0 w-full h-full flex flex-col justify-between p-8">
        <h1 className="text-2xl">
          <p>더 많은 혜택</p>
          <p>더 저렴한 금액</p>
        </h1>
        <div className="ml-auto lg:ml-0">
          <Link href="/">
            <a className="flex items-center">
              약정 계약으로 변경하기
              <Img src="/images/ic-arrowright-w.svg" width={32} height={32} alt="arrow icon" />
            </a>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Mypage() {
  const [planType, setPlanType] = useState(false)

  return (
    <ContainerAside>
      {/* 임시 버튼, */}
      <div className="text-right">
        <button onClick={() => setPlanType(!planType)} className="px-4 py-2 border rounded">
          약정계약 케이스
        </button>
        <hr className="border-dashed border-danger-400 py-4 my-4" />
      </div>
      {/* 인트로 텍스트 */}
      <h1 className="text-3xl font-light leading-normal pb-7">
        <b>이병윤</b>
        님은 현재
        <br />
        {planType === true ? (
          <>
            <b>2년 약정</b>으로
          </>
        ) : null}
        <b>14개월째 구독진행중</b>입니다.
      </h1>

      <div className="block lg:flex lg:justify-between">
        {/* ---- 내 정보 ---- */}
        <UserInfo />
        {planType === false ? <UserBanner /> : ''}
      </div>

      {/* 건강설문 & 유전자검사 */}
      <article className="rounded-large bg-gray-100 mt-6">
        <ul>
          <li className={'px-8 py-8 block lg:flex lg:justify-between lg:items-center'}>
            <div className="flex lg:w-7/12">
              <span className="pr-6 flex-shrink-0">
                <Img src="/images/ic-health-survey.svg" width={76} height={76} alt="icon" />
              </span>
              <dl>
                <dt className="text-lg font-bold mb-1">건강 설문</dt>
                <dd className="text-gray-500">
                  모든 설문을 완료하였습니다. <br />
                  작성한 설문을 확인해보시겠습니까?
                </dd>
              </dl>
            </div>
            <div className="lg:w-5/12 lg:text-right mt-8 lg:mt-0">
              <button className="w-full lg:w-auto py-3 px-5 rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all">
                설문 다시하기
              </button>
            </div>
          </li>
          <li className={'px-8 py-8 block lg:flex lg:justify-between lg:items-center border-t border-gray-200'}>
            <div className="flex lg:w-7/12">
              <span className="pr-6 flex-shrink-0">
                <Img src="/images/ic-dna-test.svg" width={76} height={76} alt="icon" />
              </span>
              <dl>
                <dt className="text-lg font-bold mb-1">유전자 검사</dt>
                <dd className="text-gray-500">
                  유전자 검사를 통해 보다 완벽한 비타메이트 상품의 추천을 받아보시고, 건강한 생명력을 유지해보세요
                </dd>
              </dl>
            </div>
            <div className="lg:w-5/12 lg:text-right mt-8 lg:mt-0 flex-shrink-0">
              {planType === true ? (
                <>
                  <button className="w-full lg:w-auto py-3 px-5 rounded-md text-white border border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 transition-all">
                    검사 신청하기
                  </button>
                </>
              ) : (
                <>
                  <div className="flex justify-between lg:block">
                    <button className="w-full lg:w-auto py-3 px-5 rounded-md  text-primary-600 border border-primary-600 hover:bg-primary-50 transition-all">
                      분석 결과 받기
                    </button>
                    <span className="mx-1"></span>
                    <button className="w-full lg:w-auto py-3 px-5 rounded-md text-white border border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 transition-all">
                      요약 정보
                    </button>
                  </div>
                </>
              )}
            </div>
          </li>
          {/* --- banner --- */}
          {planType === true ? null : (
            <li
              className={'w-full px-8 py-8 block lg:flex lg:justify-between lg:items-center border-t border-gray-200'}
            >
              <article className="w-full flex justify-between rounded-xl bg-white text-lg p-8">
                <p>건강설문, 유전자검사결과에 맞는 영양제를 구독해보세요!</p>
                <Link href="/">
                  <a className="text-primary-600">구독 신청하러 가기</a>
                </Link>
              </article>
            </li>
          )}
        </ul>
      </article>
    </ContainerAside>
  )
}
