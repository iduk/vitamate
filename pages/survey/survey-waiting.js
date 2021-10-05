import Img from 'next/image'

export default function SurveyWaiting() {
  return (
    <div className="container">
      <article className="text-center">
        <p>
          <Img src="/images/logo.svg" width="162" height="30" alt="vitamate logo" />
        </p>

        <h1 className="mt-10 mb-6 text-4xl leading-snug">
          답변 내용을
          <br />
          분석하고 있습니다.
        </h1>
        <p>잠시만 기다려주세요</p>
        <div className="mt-6">
          <article className="flex justify-center">
            {/* 
              Circle progress
              className = " progress--circle propgress--[number] "
            */}
            <div className="progress--circle progress--94">
              <div className="progress__number text-xl text-primary-600 font-extrabold">94</div>
            </div>
          </article>
        </div>
      </article>
    </div>
  )
}
