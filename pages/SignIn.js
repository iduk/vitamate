import TextInput from 'components/Forms/TextInput'
import Link from 'next/link'
import Modal from 'components/Modal'
import SignUp from 'pages/SignUp'
import { useState } from 'react'

export default function SignIn() {
  const [showSignup, setShowSignup] = useState(false)
  return (
    <>
      <form action="">
        <div className="form-group">
          <TextInput type="tel" id="userId" label="휴대폰 번호" placeholder="휴대폰 번호를 입력해 주세요" />
        </div>

        <div className="form-group">
          <TextInput type="password" id="userPassword" label="비밀번호" placeholder="비밀번호를 입력해 주세요">
            <div className="text-right">
              <Link href="/">
                <a className="inline-block p-2 text-sm text-gray-600 hover:text-gray-900">비밀번호를 잊어버리셨나요?</a>
              </Link>
            </div>
          </TextInput>
        </div>

        <footer className={'mt-6'}>
          <div className="mb-3">
            <button
              className={'w-full py-5 bg-primary-600 text-white hover:bg-primary-700 text-xl font-bold rounded-md'}
            >
              로그인
            </button>
          </div>
          <p className="my-3 text-center text-sm text-gray-500">
            아직 비타메이트의 <b className="text-primary-600">회원</b>이 아니신가요?
          </p>
          <div>
            <button
              onClick={() => setShowSignup(true)}
              className={
                'w-full py-5 border border-primary-600 text-primary-600 bg-primary-100  hover:border-primary-700 hover:text-primary-700 hover:bg-primary-200 text-xl font-bold rounded-md'
              }
            >
              비타메이트 회원가입
            </button>
          </div>
        </footer>
      </form>

      <Modal title={'회원가입'} onClose={() => setShowSignup(false)} show={showSignup}>
        <SignUp />
      </Modal>
    </>
  )
}
