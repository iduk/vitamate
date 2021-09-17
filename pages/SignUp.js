import TextInput from '../components/Forms/TextInput'

export default function SignUp() {
  const registerUser = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <article className={'p-10'}>
        <form onSubmit={registerUser}>
          <TextInput label="하하하하" id="111" placeholder="12323" type="text" />
          <TextInput label="인증번호 확인" id="login-input-pw" type="text" placeholder="비밀번호를 입력해 주세요">
            <a href="." className="text-sm underline text-gray-400">
              비밀번호를 잊어버리셨나요?
            </a>
          </TextInput>
        </form>
      </article>
      <footer className={'flex justify-center p-0'}>
        <button
          type="submit"
          onClick={() => setShowModal(false)}
          className={'w-full py-5 bg-primary text-white hover:bg-primary-dark text-xl font-bold rounded-none'}
          disabled
        >
          회원가입
        </button>
      </footer>
    </>
  )
}
