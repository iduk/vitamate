import ContainerFluid from 'components/Layouts/ContainerFluid'
import { useState } from 'react'
import Img from 'next/image'
import Modal from 'components/Modal'
import TextInput from 'components/Forms/TextInput'

export default function Survey() {
  const [showModal, setShowModal] = useState(false)

  return (
    <ContainerFluid>
      <h1 className="page-title">건강설문</h1>

      <div className="h-72 bg-gray-200 flex justify-center items-center">
        <div>
          <p>하하핳ㅎㅎㅎㅎ하..........</p>
        </div>
      </div>
      <div className="h-48 flex justify-center items-center">
        <button onClick={() => setShowModal(true)} className="btn bg-primary-600 text-white focus:bg-primary-700">
          건강설문 시작하기
        </button>
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <SurveyLoading />
      </Modal>
    </ContainerFluid>
  )
}

const SurveyStart = () => {
  return (
    <div className="px-10 pb-10" style={{ width: 800 }}>
      <article className="text-center">
        <p>
          <Img src="/images/logo.svg" width="162" height="30" alt="vitamate logo" />
        </p>

        <h1 className="my-12 text-4xl leading-snug">
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

const SurveyContent = () => {
  return (
    <div className="px-10 pb-10" style={{ width: 800 }}>
      <form>
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
          <h1 className="mb-4 text-4xl leading-snug">
            술을 많이 마신 다음날,
            <br />
            머리가 깨질 듯이 아픈 경험
          </h1>
          <p className="text-gray-500">현재 몸 상태에 맞는 영양제를 찾아 드립니다. 건강 설문을 통해 확인해 보세요</p>
        </article>

        {/* answer */}
        {/* answer - forms */}
        <article>
          <div className="form-control lg mb-4">
            <input type="text" placeholder="이름을 입력 해주세요" />
          </div>
          <div className="form-control lg mb-4">
            <input type="text" placeholder="몸무게를 입력...ㅋ" />
          </div>
        </article>
        {/* answer - checkbox */}
        <article>
          <ul>
            <li className="flex justify-between items-center">
              <div className="form-checkbox">
                <label htmlFor="survey-check1" className="inline-flex items-center py-2">
                  <input id="survey-check1" name="survery" type="checkbox" />
                  <p className="ml-3 text-lg">하루 12시간 이상의 업무 또는 학업을 일주일에 3일 이상해요</p>
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="form-checkbox">
                <label htmlFor="survey-check2" className="inline-flex items-center py-2">
                  <input id="survey-check2" name="survery" type="checkbox" />
                  <p className="ml-3 text-lg">
                    보통 (좌식 중심의 일이지만, 직장 내에서 이동하거나 서서 일하는 활동 중심)
                  </p>
                </label>
              </div>
            </li>
          </ul>
        </article>

        {/* footer buttons */}
        <div className="mt-20 flex justify-between">
          <button className="max-w-xs px-10 py-5 text-xl ease-out rounded-md border border-primary-600 text-primary-600 hover:bg-primary-100">
            이전
          </button>
          <button className="max-w-xs px-10 py-5 text-xl ease-out rounded-md bg-primary-600 text-white hover:bg-primary-700">
            다음
          </button>
        </div>
      </form>
    </div>
  )
}

const SurveyLoading = () => {
  return (
    <div className="px-10 pb-10" style={{ width: 800 }}>
      <article className="text-center">
        <p>
          <Img src="/images/logo.svg" width="162" height="30" alt="vitamate logo" />
        </p>

        <h1 className="my-12 text-4xl leading-snug">
          답변 내용을
          <br />
          분석하고 있습니다.
        </h1>
        <p>잠시만 기다려주세요</p>
        <div className="mt-10">
          <article className="flex justify-center">
            {/* circle progress....... */}
            <div className="flex justify-center items-center relative overflow-hidden w-20 h-20 border-8 border-gray-200 rounded-full">
              <span className="text-lg font-extrabold text-primary-600">48</span>
            </div>
          </article>
        </div>
      </article>
    </div>
  )
}
