import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import Img from 'next/image'
import { useState, useEffect } from 'react'
import Modal from 'components/Modal'
import TextInput from 'components/Forms/TextInput'
import Select from 'components/Forms/Select'

const UserInfo = ({ show }) => {
  const [userEdit, setUserEdit] = useState(false)
  const [isToggleOn, setIsToggleOn] = useState(false)

  const userBank = [
    { id: 'bank1', value: 'a', label: '은행선택' },
    { id: 'bank2', value: 'b', label: '카카오뱅크' },
    { id: 'bank3', value: 'c', label: 'KB국민은행' },
  ]

  return (
    <article className="w-full rounded-large bg-white shadow-lg">
      <ul>
        <li className={'px-8 py-2 h-20 flex justify-between items-center border-b border-gray-200'}>
          <h6 className="w-6/12 font-bold text-lg">내 정보</h6>
          <div className="w-6/12 text-right">
            <button
              onClick={() => setUserEdit(true)}
              className="text-primary-600 px-4 py-2 rounded-md text-sm bg-primary-50 hover:bg-primary-200 transition ease-linear"
            >
              정보 수정
            </button>

            <Modal title="정보 수정" size="md" onClose={() => setUserEdit(false)} show={userEdit}>
              <form>
                <article className="overflow-x-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                  <div className="form-group flex justify-between items-end w-full">
                    <TextInput label="휴대폰 번호" id="userPhone" type="text" placeholder="010-0000-0000" disabled />
                    <span className="flex-shrink-0 ml-3">
                      <button className={'btn border border-primary-600 text-primary-600 hover:bg-primary-100'}>
                        변경하기
                      </button>
                    </span>
                  </div>
                  <div className="form-group grid lg:grid-cols-2 gap-4">
                    <TextInput
                      type="password"
                      label="기존 비밀번호"
                      id="userPassword"
                      placeholder="기존 비밀번호를 입력하세요"
                    />
                    <TextInput
                      type="password"
                      label="새 비밀번호"
                      id="userPassword"
                      placeholder="새 비밀번호를 입력하세요"
                    />
                  </div>

                  <div className="form-group">
                    <TextInput label="이메일" id="userEmail" type="text" placeholder="이메일을 입력해주세요" />
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

                  {/* 포인트 계좌이체용 */}
                  <hr className="my-8" />
                  <div className="form-group grid grid-cols-2 gap-4">
                    <Select label="입금 은행명" options={userBank} />
                    <TextInput label="예금주명" id="userBankName" type="text" placeholder="예금주명" />
                  </div>
                  <div className="form-group">
                    <TextInput label="입금 계좌번호" id="userBankNumber" type="text" placeholder="계좌번호" />
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
                </article>
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
                    수정하기
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
              <span className="ml-3 line-through text-gray-400">624,000원/년</span>
            </p>
            <p>
              <span>총 할인가</span>
              <span className="ml-3">499,200원/년</span>
            </p>
          </div>
        </li>
        <li className={'px-8 py-2 h-20 flex justify-between items-center border-b border-gray-200'}>
          <div className="flex items-center">
            <span className="inline-flex flex-shrink-0 mr-2">
              <Img src="/images/ic-card.svg" width={24} height={24} alt="icon" />
            </span>
            <span>정기 결제 금액</span>
          </div>
          <div className="text-right text-gray-600">월 52,000원</div>
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
          <div className="text-right text-gray-600">10,000 P</div>
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
  const [isAnalyze, setIsAnalyze] = useState(false)
  const [isCategory, setIsCategory] = useState(null)

  const categoryToggle = (id) => {
    if (isCategory === id) {
      return setIsCategory(null)
    } else {
      isCategory == id[0] && setIsCategory(true)
    }
    setIsCategory(id)
  }

  const categories = [
    { titie: '영양소' },
    { titie: '운동' },
    { titie: '피부/모발' },
    { titie: '식습관' },
    { titie: '개인특성' },
    { titie: '건강관리' },
  ]

  const level_a = '안심'
  const level_b = '보통'
  const level_c = '주의'
  const tung = '-'

  const table_column = [
    { item: '비타민 C 농도', level: level_a, score: 92, perm: tung },
    { item: '비타민 D 농도', level: level_b, score: 65, perm: '70~77' },
    { item: '코엔자임Q 10 농도', level: level_c, score: 28, perm: '17~27' },
    { item: '비타민 C 농도', level: level_a, score: 92, perm: tung },
    { item: '비타민 D 농도', level: level_b, score: 65, perm: '70~77' },
    { item: '코엔자임Q 10 농도', level: level_c, score: 28, perm: '17~27' },
    { item: '비타민 C 농도', level: level_a, score: 92, perm: tung },
    { item: '비타민 D 농도', level: level_b, score: 65, perm: '70~77' },
    { item: '코엔자임Q 10 농도', level: level_c, score: 28, perm: '17~27' },
  ]

  return (
    <ContainerAside>
      {/* 임시 버튼, */}
      {/* <div className="text-right">
        <button onClick={() => setPlanType(!planType)} className="px-4 py-2 border rounded">
          약정계약 케이스
        </button>
        <hr className="border-dashed border-danger-400 py-4 my-4" />
      </div> */}

      {/* 인트로 텍스트 */}
      <h1 className="text-3xl font-light leading-normal pb-5">
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

      <IconNav />

      <div className="block lg:flex lg:justify-between">
        {/* ---- 내 정보 ---- */}
        <UserInfo />
        {planType === false ? <UserBanner /> : ''}
      </div>

      {/* 건강설문 & 유전자검사 */}
      <article className="rounded-large bg-gray-100 mt-6">
        <ul>
          <li className={'px-8 py-8 block lg:flex lg:justify-between lg:items-center'}>
            <div className="flex lg:w-7/12 items-center">
              <span className="pr-6 flex-shrink-0">
                <Img src="/images/ic-health-survey.svg" width={76} height={76} alt="icon" />
              </span>
              <dl>
                <dt className="text-lg font-bold mb-1">건강 설문</dt>
                <dd className="text-gray-500">내가 작성한 설문을 확인해 보세요.</dd>
              </dl>
            </div>
            <div className="lg:w-5/12 lg:text-right mt-8 lg:mt-0">
              <button className="w-full lg:w-auto py-3 px-5 rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all">
                설문 다시하기
              </button>
            </div>
          </li>
          <li className={'px-8 py-8 block lg:flex lg:justify-between lg:items-center border-t border-gray-200'}>
            <div className="flex lg:w-7/12 items-center">
              <span className="pr-6 flex-shrink-0">
                <Img src="/images/ic-dna-test.svg" width={76} height={76} alt="icon" />
              </span>
              <dl>
                <dt className="text-lg font-bold mb-1">유전자 검사</dt>
                <dd className="text-gray-500">내 안의 유전자 정보를 확인해 보세요.</dd>
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
                    <button
                      onClick={() => setIsAnalyze(true)}
                      className="w-full lg:w-auto py-3 px-5 rounded-md  text-primary-600 border border-primary-600 hover:bg-primary-50 transition-all"
                    >
                      요약 정보
                    </button>
                    <span className="mx-1"></span>
                    <button className="w-full lg:w-auto py-3 px-5 rounded-md text-white border border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 transition-all">
                      상세 정보
                    </button>
                  </div>

                  {/* 요약 정보 팝업 */}
                  <Modal title="요약 정보" size="md" onClose={() => setIsAnalyze(false)} show={isAnalyze}>
                    <>
                      <article className="mb-4">
                        <div className="pb-2">
                          <h5 className="text-lg font-light mb-1">
                            <span className="font-bold">김태훈</span>
                            <span>님의 유전자 분석 결과</span>
                          </h5>
                        </div>

                        <ul className="w-full grid grid-cols-2 grid-rows-2 lg:grid-rows-none lg:grid-cols-4 gap-4 px-4 py-4 rounded-md border bg-gray-50 text-sm">
                          <li>
                            <h6 className="text-gray-500 mb-2">성별/출생년도</h6>
                            <p>남성 1970</p>
                          </li>
                          <li>
                            <h6 className="text-gray-500 mb-2">생년월일</h6>
                            <p>1970.02.18</p>
                          </li>
                          <li>
                            <h6 className="text-gray-500 mb-2">채취일</h6>
                            <p>2021.10.12</p>
                          </li>
                          <li>
                            <h6 className="text-gray-500 mb-2">접수일</h6>
                            <p>2021.10.14</p>
                          </li>
                        </ul>
                      </article>

                      <article className="overflow-hidden">
                        <div className="overflow-hidden" style={{ width: 'calc(100vw - 64px)' }}>
                          <ul className="tabs-faq">
                            {categories.map((cat, id) => (
                              <li
                                key={id}
                                className={`${isCategory === id ? 'active' : ''} tabs-faq--tab w-1/4 lg:w-auto`}
                              >
                                <Link href="#">
                                  <a onClick={() => categoryToggle(id)}>{cat.titie}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>

                      <div className="h-96 overflow-y-auto relative">
                        <section className="absolute inset-0 w-full h-full">
                          <h5 className="inline-block text-lg text-highlight my-5">스트레스 관리형</h5>
                          <div>
                            <table className="w-full text-left">
                              <thead>
                                <tr>
                                  <th className="px-3 py-2">관리 항목</th>
                                  <th className="px-3 py-2">등급・점수</th>
                                  <th className="px-3 py-2">유전율(%)</th>
                                </tr>
                              </thead>
                              <tbody>
                                {table_column.map((cell, id) => (
                                  <tr key={id}>
                                    <td className="px-3 py-2">{cell.item}</td>
                                    <td className="px-3 py-2">
                                      <div
                                        className={`${
                                          (cell.level === level_a && 'text-green-500') ||
                                          (cell.level === level_b && 'text-warning-500') ||
                                          (cell.level === level_c && 'text-danger-500')
                                        }`}
                                      >
                                        <span>{cell.level}</span>
                                        <span className="ml-1">{cell.score}</span>
                                      </div>
                                    </td>
                                    <td className="px-3 py-2">{cell.perm}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </section>
                      </div>
                    </>
                  </Modal>
                </>
              )}
            </div>
          </li>
          {/* --- banner --- */}
          {planType === true ? null : (
            <li
              className={'w-full px-8 py-8 block lg:flex lg:justify-between lg:items-center border-t border-gray-200'}
            >
              <article className="w-full lg:flex lg:justify-between rounded-xl bg-white text-lg text-center lg:text-justify p-8">
                <p className="mb-6 lg:m-0">건강설문, 유전자검사결과에 맞는 영양제를 구독해보세요!</p>
                <Link href="/">
                  <a className="text-right text-primary-600">구독 신청하러 가기</a>
                </Link>
              </article>
            </li>
          )}
        </ul>
      </article>
    </ContainerAside>
  )
}

const IconNav = () => {
  const IconNavList = [
    {
      Path: '/mypage/subscribe',
      Icon: 'subscribe',
      Name: '구독 관리',
    },
    {
      Path: '/mypage/payment',
      Icon: 'pay',
      Name: '결제 관리',
    },
    {
      Path: '/mypage/addressbook',
      Icon: 'delive',
      Name: '배송지 관리',
    },
    {
      Path: '/mypage/vita-calendar',
      Icon: 'calendar',
      Name: '비타 캘린더',
    },
    {
      Path: '/mypage/point',
      Icon: 'point',
      Name: '포인트',
    },
    {
      Path: '/mypage/delete-account',
      Icon: 'logout',
      Name: '회원 탈퇴',
    },
  ]
  return (
    <div className="my-4">
      <ul className="grid grid-cols-4 grid-rows-2 gap-4 lg:hidden">
        {IconNavList.map((nav, id) => (
          <li key={id} className="text-center">
            <Link href={nav.Path}>
              <a>
                <span className="relative">
                  <Img src={`/images/ic-myvita-${nav.Icon}.svg`} width={50} height={50} alt="구독관리" />
                </span>
                <p className="text-sm">{nav.Name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
