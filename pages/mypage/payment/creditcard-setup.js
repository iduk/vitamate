import Link from 'next/link'
import Img from 'next/image'
import TextInput from 'components/Forms/TextInput'

export default function CreditcardSetup() {
  const registerUser = (event) => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }

  return (
    <>
      <form onSubmit={registerUser}>
        <div className="form-group">
          <label>카드 번호</label>
          <div className="form-control">
            <input
              className="inline-flex"
              id="credit-card"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              autoCorrect="off"
              spellCheck="false"
              maxLength="19"
              placeholder="0000 0000 0000 0000"
            />
          </div>
        </div>

        <div className="form-group grid grid-cols-3 gap-4">
          <TextInput label="유효기간" type="tel" placeholder="MM / YY" />
          <div>
            <TextInput label="CVC" type="tel" placeholder="CVC" />
          </div>

          <TextInput label="카드 비밀번호" type="password" placeholder="앞두자리" />
        </div>

        <div className="form-group">
          <TextInput label="소유자명" type="text" placeholder="홍길동" />
        </div>

        <div className="form-group">
          <TextInput label="별칭" type="text" placeholder="마스터 카드" />
        </div>

        <hr className="pb-6 mt-6" />
        <button type="submit" className="w-full rounded-md p-4 bg-primary-600 text-white transition-colors ease-linear">
          등록하기
        </button>
      </form>
    </>
  )
}
