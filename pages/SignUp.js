import Select from '../components/Forms/Select'
import TextInput from '../components/Forms/TextInput'
import { useState } from 'react'
import Link from 'next/link'
import Checkbox from 'components/Forms/Checkbox'

export default function SignUp() {
  const [isShowing, setIsShowing] = useState(false)

  const registerUser = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <article className={'overflow-y-auto'} style={{ maxHeight: 540 }}>
        <form onSubmit={registerUser}>
          <div className="form-group">
            <TextInput type="text" label="휴대폰 번호" id="userPhone" placeholder="010-0000-0000" />
          </div>
          {/* 인증번호 */}
          <div className="form-group">
            <div className="flex justify-between items-end w-full">
              <TextInput label="인증번호 확인" id="login-input-pw" type="text" placeholder="인증번호를 입력해주세요" />
              <span className="flex-shrink-0 ml-4">
                <button
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                  className={'btn border border-gray-300 hover:border-gray-500 hover:bg-gray-100'}
                >
                  인증하기
                </button>
              </span>
            </div>

            <div className="mt-2 text-sm text-gray-500 flex justify-between">
              {isShowing === true ? (
                <>
                  {/* 인증번호 입력시간 초과 */}
                  <p className="text-sm text-danger-500">입력시간이 초과되었습니다. 다시 인증해주세요.</p>
                </>
              ) : (
                <>
                  {/* 인증번호 전송 후 */}
                  <p>휴대폰으로 전송된 인증번호를 입력해주세요</p>
                  <p>
                    대기시간 <span className="text-blue-600">20초</span>
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="form-group error">
            <TextInput
              type="password"
              label="비밀번호"
              id="userPassword"
              value="123456!@#&%"
              placeholder="숫자/문자/특수기호를 포함한 8자리 이상 입력"
            >
              <p className="mt-2 text-sm text-danger-500">8자리 이상 입력해주세요.</p>
            </TextInput>
          </div>

          <div className="form-group">
            <div className="flex justify-between items-end w-full">
              <TextInput type="text" label="주소 입력" placeholder="주소를 입력해주세요" id="userAddress" />
              <span className="ml-4 flex-shrink-0">
                <button className={'btn border border-primary-600 text-primary-600 hover:bg-primary-100'}>
                  주소찾기
                </button>
              </span>
            </div>
            <div className="mt-4">
              <TextInput type="text" placeholder="나머지 주소를 입력해주세요" id="userAddress2" />
            </div>
          </div>

          <hr className="mt-8" />

          <ul className="pb-10">
            <li className="flex justify-between items-center py-3">
              <Checkbox id="check-all" name="agree" label-class="font-bold" label="전체 동의하기" />
            </li>

            <li className="flex justify-between items-center">
              <Checkbox id="check-1" name="agree" label="[필수]이용약관" />
              <Link href="/TermsOfService">
                <a className="p-2 text-sm text-gray-500 underline">보기</a>
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Checkbox id="check-2" name="agree" label="[필수]개인정보 수집 동의 약관" />
              <Link href="/PrivacyPolicy">
                <a className="p-2 text-sm text-gray-500 underline">보기</a>
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Checkbox id="check-3" name="agree" label="[선택]마케팅 수집 동의" />
              <Link href="/TermsOfService">
                <a className="p-2 text-sm text-gray-500 underline">보기</a>
              </Link>
            </li>
          </ul>
        </form>
      </article>

      <footer className={'flex justify-center p-0'}>
        <button
          type="submit"
          onClick={() => setShowModal(false)}
          className={'w-full py-5 bg-primary-600 text-white hover:bg-primary-700 text-xl font-bold rounded-md'}
          disabled
        >
          회원가입
        </button>
      </footer>
    </>
  )
}
