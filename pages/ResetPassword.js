import TextInput from 'components/Forms/TextInput'
import { useState } from 'react'
import { Router } from 'next/router'
import Link from 'next/link'

export default function ResetPassword() {
  const [isShowing, setIsShowing] = useState(false)

  const registerUser = (e) => {
    e.preventDefault()
  }

  const signupData = {
    phoneNumber: '010-7390-0206',
    authSample: '584565',
  }

  return (
    <>
      <article className={'overflow-y-auto'} style={{ maxHeight: 540 }}>
        <form onSubmit={registerUser}>
          <div className="form-group">
            <TextInput
              type="text"
              label="휴대폰 번호"
              value={signupData.phoneNumber}
              id="userPhone"
              placeholder="010-0000-0000"
            />
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
                  인증하기
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
        </form>
      </article>

      <footer className={'flex justify-center mt-6'}>
        <Link href="/dtc">
          <a
            className={
              'w-full py-5 bg-primary-600 text-white hover:bg-primary-700 text-xl font-bold rounded-md text-center'
            }
            disabled
          >
            휴대폰 번호로 전송
          </a>
        </Link>
      </footer>
    </>
  )
}
