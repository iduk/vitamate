import Img from 'next/image'

export default function SurveyStart() {
  return (
    <div className="container py-8">
      <article className="text-center">
        <p>
          <Img src="/images/logo.svg" width="162" height="30" alt="vitamate logo" />
        </p>

        <h1 className="mt-10 mb-6 text-4xl leading-snug">
          비타메이트
          <br />
          건강 설문을 시작합니다
        </h1>
        <p>3분 정도 소요됩니다</p>
        <div className="mt-20">
          <button className="w-full max-w-xs px-8 py-5 text-xl ease-out rounded-md bg-primary-600 text-white hover:bg-primary-700">
            시작하기
          </button>
        </div>
      </article>
    </div>
  )
}
