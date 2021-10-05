import Img from 'next/image'
import TextInput from 'components/Forms/TextInput'
import Checkbox from 'components/Forms/Checkbox'

export default function SurveyForm() {
  return (
    <form className="grid grid-row-2 h-full">
      <div className="overflow-y-auto lg:h-auto" style={{ maxHeight: '70vh' }}>
        {/* steps */}
        <article className="relative mb-8">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
            <div
              style={{ width: '30%' }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600"
            ></div>
          </div>
        </article>

        {/* question */}
        <article className="survey-q mb-10">
          <span className="text-lg text-gray-400">[질문1]</span>
          <h1 className="mb-4 text-2xl lg:text-4xl leading-snug">
            술을 많이 마신 다음날,
            <br />
            머리가 깨질 듯이 아픈 경험
          </h1>
          <p className="text-gray-500">현재 몸 상태에 맞는 영양제를 찾아 드립니다. 건강 설문을 통해 확인해 보세요</p>
        </article>

        {/* answer */}
        {/* answer - forms */}
        <article>
          <TextInput id="answer1" placeholder="이름을 입력해주세요" className="mb-4" />
          <TextInput id="answer2" placeholder="몸무게를 입력해주세요" />
        </article>
        {/* answer - checkbox */}
        <article>
          <ul className="my-6">
            <li>
              <Checkbox
                id="survey-check1"
                name="survey"
                label="하루 12시간 이상의 업무 또는 학업을 일주일에 3일 이상해요"
                labelClass="text-lg"
              />
            </li>
            <li className="">
              <Checkbox
                id="survey-check2"
                name="survey"
                label="보통 (좌식 중심의 일이지만, 직장 내에서 이동하거나 서서 일하는 활동 중심)"
                labelClass="text-lg"
              />
            </li>
            <li className="">
              <Checkbox id="survey-check3" name="survey" label="세번째 답변입니다" labelClass="text-lg" />
            </li>
            <li className="">
              <Checkbox id="survey-check4" name="survey" label="네번째 답변입니다" labelClass="text-lg" />
            </li>
          </ul>
        </article>
      </div>

      {/* footer buttons */}
      <div className="mt-6 flex justify-between">
        <button className="max-w-xs px-10 py-5 text-xl ease-out rounded-md border border-primary-600 text-primary-600 hover:bg-primary-100">
          이전
        </button>
        <button className="max-w-xs px-10 py-5 text-xl ease-out rounded-md bg-primary-600 text-white hover:bg-primary-700">
          다음
        </button>
      </div>
    </form>
  )
}
