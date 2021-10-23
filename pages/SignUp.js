import TextInput from 'components/Forms/TextInput'
import { useState } from 'react'
import { Router } from 'next/router'
import Link from 'next/link'
import Checkbox from 'components/Forms/Checkbox'

export default function SignUp() {
  const [isShowing, setIsShowing] = useState(false)

  const registerUser = (e) => {
    e.preventDefault()
  }

  const signupData = {
    phoneNumber: '010-7390-0206',
    authSample: '584565',
    userPassword: '********',
    userPassword2: '********',
    userRecommendCode: '010-5550-7788',
    checked: 'checked',
  }

  return (
    <>
      <article className={'overflow-y-auto'} style={{ maxHeight: 540 }}>
        <form onSubmit={registerUser}>
          <div className="form-group">
            <div className="flex justify-between items-end w-full">
              <TextInput
                type="text"
                label="휴대폰 번호"
                value={signupData.phoneNumber}
                id="userPhone"
                placeholder="010-0000-0000"
              />
              <span className="flex-shrink-0 ml-4">
                <button className={'btn border border-gray-300 hover:border-gray-500 hover:bg-gray-100'}>
                  인증번호 전송
                </button>
              </span>
            </div>
          </div>
          {/* 인증번호 */}
          <div className="form-group">
            <div className="flex justify-between items-end w-full">
              <TextInput
                label="인증번호 확인"
                value={signupData.authSample}
                id="login-input-pw"
                type="text"
                placeholder="인증번호를 입력해주세요"
              />
              <span className="flex-shrink-0 ml-4">
                <button
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                  className={'btn border border-gray-300 hover:border-gray-500 hover:bg-gray-100'}
                >
                  인증확인
                </button>
              </span>
            </div>

            <div className="mt-2 text-sm text-gray-500 flex justify-between">
              {isShowing === true ? (
                <>
                  {/* 인증번호 입력시간 초과 */}
                  {/* <p className="text-sm text-danger-500">입력시간이 초과되었습니다. 다시 인증해주세요.</p> */}
                  <p className="text-sm text-success-500">인증 되었습니다!</p>
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

          <div className="form-group">
            <TextInput
              type="password"
              label="비밀번호"
              id="userPassword"
              value={signupData.userPassword}
              placeholder="영어 대문자, 소문자, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 8자리 이상 입력"
            ></TextInput>
            <TextInput
              type="password"
              id="userPassword2"
              value={signupData.userPassword2}
              placeholder="비밀번호 재입력"
              className="mt-3"
            ></TextInput>
          </div>

          <div className="form-group">
            <div className="flex justify-between items-end">
              <TextInput
                label="추천인 코드"
                type="text"
                id="userRecommend"
                value={signupData.userRecommendCode}
                placeholder="추천인"
              ></TextInput>
              <div className=" flex-shrink-0 ml-4">
                <button className={'btn border border-gray-300 hover:border-gray-500 hover:bg-gray-100'}>확인</button>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-400">회원가입이 완료 된 이후에는 추천인 코드 입력이 불가합니다</p>
          </div>

          <hr className="mt-8" />

          <ul className="pb-10">
            <li className="flex justify-between items-center py-3">
              <Checkbox
                checked={signupData.checked}
                id="check-all"
                name="agree"
                label-class="font-bold"
                label="전체 동의하기"
              />
            </li>

            <li className="flex justify-between items-center">
              <Checkbox checked={signupData.checked} id="check-1" name="agree" label="[필수]이용약관" />
              <Link href="/TermsOfService">
                <a className="p-2 text-sm text-gray-500 underline">보기</a>
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Checkbox checked={signupData.checked} id="check-2" name="agree" label="[필수]개인정보 수집 동의 약관" />
              <Link href="/PrivacyPolicy">
                <a className="p-2 text-sm text-gray-500 underline">보기</a>
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Checkbox checked={signupData.checked} id="check-3" name="agree" label="[선택]마케팅 수집 동의" />
              <Link href="/TermsOfService">
                <a className="p-2 text-sm text-gray-500 underline">보기</a>
              </Link>
            </li>
          </ul>
        </form>
      </article>

      <footer className={'flex justify-center p-0'}>
        <Link href="/dtc">
          <a
            className={
              'w-full py-5 bg-primary-600 text-white hover:bg-primary-700 text-xl font-bold rounded-md text-center'
            }
            disabled
          >
            회원가입
          </a>
        </Link>
      </footer>
    </>
  )
}
