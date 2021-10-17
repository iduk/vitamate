import TextInput from 'components/Forms/TextInput'
import { useState } from 'react'
import Link from 'next/link'
import Checkbox from 'components/Forms/Checkbox'
import Select from 'components/Forms/Select'

export default function Subscription() {
  const [isShowing, setIsShowing] = useState(false)

  const registerUser = (e) => {
    e.preventDefault()
  }

  const tel_type = [
    { id: 'hahaha', value: 'HOHOHO', label: '선택' },
    { id: 'hahaha', value: 'HOHOHO', label: '010' },
  ]
  const store_date = [
    { id: 'store-date1', value: 'store1', label: '회원 탈퇴시 자동 폐기해 주세요 ' },
    { id: 'store-date2', value: 'store2', label: '유전자 검사 분석 후 폐기해 주세요 ' },
  ]
  const sheet_types = [
    { id: 'type1', value: 'type1', label: '무료 PDF 보기' },
    { id: 'type2', value: 'type2', label: '유료 책자 신청 15,000원' },
  ]

  const birthdayType = [
    { id: '0', value: '0', label: '양력' },
    { id: '1', value: '1', label: '음력' },
  ]
  const birthdayMonth = [{ label: '1월' }, { label: '2월' }]
  const birthdayDay = [{ label: '1일' }, { label: '2일' }]

  const Sample = {
    userName: '김태훈',
    dataOfBirth: '1970. 2. 18.',
    userPhoneNumber: '010-7390-0206',
    userAddress1: '서울시 노원구 동일로 227길',
    userAddress2: '상계주공아파트 1613동 808호',
    checked: 'checked',
  }

  return (
    <div className="flex flex-col justify-between">
      <article className="overflow-y-auto border-b" style={{ height: '65vh' }}>
        <form onSubmit={registerUser}>
          <div className="mb-4 p-4 leading-normal text-secondary-700 bg-secondary-50 rounded-lg" role="alert">
            <p>1년 이상 약정 선택시 유전자검사 비용 전액을 페이백 해드립니다.</p>
          </div>

          <div className="form-group grid grid-cols-8 gap-4">
            <div className=" col-span-5">
              <TextInput
                type="text"
                value={Sample.userName}
                label="이름"
                id="userPhone"
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div className=" col-span-3">
              <label>성별</label>
              <div className="grid grid-cols-2 gap-2">
                <button className={'w-full p-3 rounded-md border border-primary-600 text-primary-600 '}>남자</button>
                <button className={'p-3 rounded-md border border-gray-300 text-gray-600 '}>여자</button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>생년월일</label>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-8">
                <TextInput type="text" value={Sample.dataOfBirth} />
              </div>
              <div className="col-span-4">
                <Select options={birthdayType} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <TextInput type="tel" placeholder="000-0000-0000" value={Sample.userPhoneNumber} disabled="disabled" />
          </div>

          {/* 주소입력 */}
          <div className="form-group">
            <div className="flex place-items-end">
              <div className="flex-1 mr-3">
                <TextInput
                  type="text"
                  value={Sample.userAddress1}
                  label="주소 입력"
                  placeholder="주소를 입력해주세요"
                  id="userAddress"
                />
              </div>
              <div className="flex-0">
                <button className={'btn border border-primary-600 text-primary-600 hover:bg-primary-100'}>
                  주소찾기
                </button>
              </div>
            </div>
            <TextInput
              type="text"
              value={Sample.userAddress2}
              placeholder="나머지 주소를 입력해주세요"
              id="userAddress2"
              className="mt-3"
            />
          </div>

          <div className="form-group">
            <Select label="유전자검사 결과지 유형 선택" options={sheet_types} />
          </div>

          <div className="form-group">
            <Select label="유전자검사 결과지 보관기간 선택" options={store_date} />
            <ul className="text-sm mt-2 text-gray-600 py-2">
              <li className="pl-4 border-l-4 border-primary-300">
                <p>
                  회원님께서 선택하신 기간에 비타메이트에서 보관하는 데이터는 완전히 삭제되지만 유전자검사 전문기관
                  마크로젠에서는 데이터를 10년간 의무 보관합니다.
                </p>
              </li>
              <li className="pl-4 border-l-4 border-primary-300 mt-2">
                <p>
                  당사의 데이터가 삭제되었더라도 회원님이 필요 시 마크로젠의 마이지놈스토리(
                  https://www.my-genomestory.com) 에서 검사결과 열람 할 수 있습니다.
                </p>
              </li>
            </ul>
          </div>

          <ul className="grid grid-cols-2 p-4 mt-6 border-t border-b border-gray-200 bg-gray-100">
            <li>
              <h5 className="text-lg font-bold">유전자 검사</h5>
              <p className="text-sm">검사 키트 + 총 50가지 검사 항목</p>
            </li>
            <li className="font-extrabold text-right place-self-end text-primary-600">60,000 원</li>
          </ul>

          <ul className="py-6">
            <li className="flex justify-between items-center">
              <Checkbox checked={Sample.checked} id="check-1" name="agree" label="[필수] 제 3자 정보제공동의 약관" />
              <Link href="/TermsOfService">
                <a className="p-2 text-sm text-gray-500 underline">보기</a>
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Checkbox checked={Sample.checked} id="check-2" name="agree" label="[선택] 검사 결과 보관 여부 확인" />
              <Link href="/PrivacyPolicy">
                <a className="p-2 text-sm text-gray-500 underline">보기</a>
              </Link>
            </li>
            {/* <li className="flex justify-between items-center">
              <Checkbox id="check-3" name="agree" label="책자 신청하기 (+20,000원)" />
            </li> */}
          </ul>
        </form>
      </article>

      <footer className={'flex justify-center pt-6'}>
        <Link href="/survey">
          <a
            className={
              'w-full py-5 bg-primary-600 text-white hover:bg-primary-700 text-xl font-bold rounded-md text-center'
            }
            disabled
          >
            결제하기
          </a>
        </Link>
      </footer>
    </div>
  )
}
