import { useState } from 'react'
import Modal from 'components/Modal'

export default function SignIn() {
  const [showModal, setShowModal] = useState(true)

  return (
    <div>
      <Modal title={'로그인'} onClose={() => setShowModal(false)} show={showModal}>
        <article className={'p-10'}>
          <form action="">
            <div className="form-control w-full">
              <label for="login-input-id"> 아이디 </label>
              <input className="text-lg" id="login-input-id" type="text" placeholder="핸드폰 번호를 입력해 주세요" />
            </div>

            <div className="form-control w-full">
              <div className="flex justify-between">
                <label for="login-input-id"> 비밀번호 </label>
                <a href="#" className="text-sm underline text-gray-400">
                  비밀번호를 잊어버리셨나요?
                </a>
              </div>
              <input className="text-lg" id="login-input-pw" type="text" placeholder="비밀번호를 입력해 주세요" />
            </div>
          </form>
        </article>
        <footer className={'flex justify-center p-0'}>
          <button
            onClick={() => setShowModal(false)}
            className={'w-full py-5 bg-primary text-white hover:bg-primary-dark text-xl font-bold rounded-none'}
          >
            로그인하기
          </button>
        </footer>
      </Modal>
    </div>
  )
}
