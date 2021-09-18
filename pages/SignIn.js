import TextInput from 'components/Forms/TextInput'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
      <article className={'p-10'}>
        <form action="">
          <div className="form-group">
            <TextInput type="tel" id="userId" label="휴대폰 번호" placeholder="휴대폰 번호를 입력해 주세요" />
          </div>

          <div className="form-group">
            <div className="form-group">
              <TextInput type="password" id="userPassword" label="비밀번호" placeholder="비밀번호를 입력해 주세요">
                <div className="text-right">
                  <Link href=".">
                    <a className="inline-block p-2 text-sm text-gray-500 hover:text-gray-900">
                      비밀번호를 잊어버리셨나요?
                    </a>
                  </Link>
                </div>
              </TextInput>
            </div>
          </div>
        </form>
      </article>
      <footer className={'flex justify-center p-0'}>
        <button className={'w-full py-5 bg-primary-600 text-white hover:bg-primary-700 text-xl font-bold rounded-none'}>
          로그인하기
        </button>
      </footer>
    </>
  )
}
