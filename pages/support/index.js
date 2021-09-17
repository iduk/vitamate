import LayoutSidebar from 'components/Layouts/LayoutSidebar'
import { useState } from 'react'
import Img from 'next/image'

export default function Support() {
  const [question, setquestion] = useState(0)
  return (
    <LayoutSidebar>
      <div className="container mx-auto">
        <div className="w-full mx-auto">
          <ul>
            <li className="py-4 border-gray-200 border-solid border-b">
              {/* title */}
              <article
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}
              >
                <h3 className="w-10/12 font-normal">비타메이트 DTC유전자검사 키트배송안내</h3>
                <span>
                  {question === 0 ? (
                    <Img width={40} height={40} src="/images/ic-arrowdown.svg" alt="down" />
                  ) : (
                    <Img width={40} height={40} src="/images/ic-arrowup.svg" alt="up" />
                  )}
                </span>
              </article>

              {/* detail */}
              {question === 0 && (
                <div className="p-5  bg-gray-100 rounded-b-lg mt-3">
                  <h5 className="pb-2">비타메이트 DTC유전자검사 키트배송안내</h5>
                  <p className="text-gray-800">
                    안녕하세요. 맞춤영양제 비타메이트에요. 배송지가 CJ 대한통운이 발송되지 않는 군부대인 경우에는
                    우체국택배로 발송해 드리고 있어요. 군부대 우체국택배 배송일은 평균 배송일에서 하루가 더 소요되고
                    있으니 참고 부탁드려요. ※ 군부대 특성 상 제품 회수불가로 반품이 어려운 점 양해 부탁드려요.
                  </p>
                </div>
              )}
            </li>
            <li className="py-4 border-gray-200 border-solid border-b">
              {/* title */}
              <article
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (question === 1 ? setquestion(null) : setquestion(1))}
              >
                <h3 className="w-10/12 font-normal">비타메이트 리뷰이벤트 진행</h3>
                <span>
                  {question === 1 ? (
                    <Img width={40} height={40} src="/images/ic-arrowdown.svg" alt="down" />
                  ) : (
                    <Img width={40} height={40} src="/images/ic-arrowup.svg" alt="up" />
                  )}
                </span>
              </article>

              {/* detail */}
              {question === 1 && (
                <div className="p-5  bg-gray-100 rounded-b-lg mt-3">
                  <h5 className="pb-2">비타메이트 리뷰이벤트 진행</h5>
                  <p className="text-gray-800">
                    안녕하세요. 맞춤영양제 비타메이트에요. 배송지가 CJ 대한통운이 발송되지 않는 군부대인 경우에는
                    우체국택배로 발송해 드리고 있어요. 군부대 우체국택배 배송일은 평균 배송일에서 하루가 더 소요되고
                    있으니 참고 부탁드려요. ※ 군부대 특성 상 제품 회수불가로 반품이 어려운 점 양해 부탁드려요.
                  </p>
                </div>
              )}
            </li>
            <li className="py-4 border-gray-200 border-solid border-b">
              {/* title */}
              <article
                className="flex justify-between items-center cursor-pointer"
                onClick={() => (question === 2 ? setquestion(null) : setquestion(2))}
              >
                <h3 className="w-10/12 font-normal">비타메이트는 이런걸 공지합니다.</h3>
                <span>
                  {question === 2 ? (
                    <Img width={40} height={40} src="/images/ic-arrowdown.svg" alt="down" />
                  ) : (
                    <Img width={40} height={40} src="/images/ic-arrowup.svg" alt="up" />
                  )}
                </span>
              </article>

              {/* detail */}
              {question === 2 && (
                <p className="p-5 text-gray-800 bg-gray-100 rounded-b-lg mt-3">
                  안녕하세요. 맞춤영양제 비타메이트에요. 배송지가 CJ 대한통운이 발송되지 않는 군부대인 경우에는
                  우체국택배로 발송해 드리고 있어요. 군부대 우체국택배 배송일은 평균 배송일에서 하루가 더 소요되고
                  있으니 참고 부탁드려요. ※ 군부대 특성 상 제품 회수불가로 반품이 어려운 점 양해 부탁드려요.
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </LayoutSidebar>
  )
}
