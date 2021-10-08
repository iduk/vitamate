import ContainerAside from 'components/Layouts/ContainerAside'
import { useState } from 'react'
import Img from 'next/image'

export default function News() {
  const [question, setquestion] = useState(0)
  return (
    <ContainerAside>
      <h1 className="page-title _sub">비타 뉴스</h1>

      <div className="w-full mx-auto">
        <ul>
          <li className="py-4 border-gray-200 border-solid border-b">
            {/* title */}
            <article
              className="flex justify-between items-center cursor-pointer"
              onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}
            >
              <h3 className="w-10/12 font-normal">비타메이트, 유전자 분석으로 맞춤 영양제 제공 서비스 출시</h3>
              <span>
                {question === 0 ? (
                  <Img width={40} height={40} src="/images/ic-arrowup.svg" alt="up" />
                ) : (
                  <Img width={40} height={40} src="/images/ic-arrowdown.svg" alt="down" />
                )}
              </span>
            </article>

            {/* detail */}
            {question === 0 && (
              <div className="p-5  bg-gray-100 rounded-b-lg mt-3 leading-7">
                <p className="text-gray-800">
                  비타메이트는 국내 1위 개인유전체 분석 기업인 마크로젠과의 협력을 통해 14가지의 개인 유전정보를 분석해
                  개인에게 필요한 영양 정보를 도출해 낼 수 있는 기반을 만들었다. 개인의 생활습관 및 기저질환 등의
                  데이터를 취합하기 위한 문진표를 만들어냈다. 이러한 정보를 AI기반 알고리즘으로 분석, 개인에게 필요한
                  영양제를 도출해 내는 과정에 IT기술을 접목했다. 비타메이트는 AI 전문가와 전문의가 참여해 개발한 AI
                  알고리즘이 선천적인 개인영양정보와 현재의 식습관을 분석하고 매달 정기구독형으로 영양제를 배송해 준다.
                  배송되는 영양제는 비타메이트가 개발한 한국인에게 꼭 필요한 14가지 영양제다. 월 배송서비스는 몸에 좋은
                  영양제를 집에 쌓아둘 일도 없어져 불필요한 영양제 소비를 막아주고 각 영양제마다 부형제로 들어있는 각종
                  영양제를 과남용 하지 않도록 도와준다.
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
              <h3 className="w-10/12 font-normal">개인 맞춤형 영양제 큐레이션 '비타메이트', 'K-스타트업대상'</h3>
              <span>
                {question === 1 ? (
                  <Img width={40} height={40} src="/images/ic-arrowup.svg" alt="up" />
                ) : (
                  <Img width={40} height={40} src="/images/ic-arrowdown.svg" alt="down" />
                )}
              </span>
            </article>

            {/* detail */}
            {question === 1 && (
              <div className="p-5 text-gray-800 bg-gray-100 rounded-b-lg mt-3">
                <h5 className="text-lg pb-3 ">비타메이트, 유전자 분석으로 맞춤 영양제 제공 서비스 출시</h5>

                <p className="text-gray-800">
                  비타메이트는 유전자 검사 및 건강 문진 등 개인의 신체정보를 AI(인공지능) 기반 알고리즘으로 분석, 고객
                  맞춤형의 영양제 조합을 도출할 수 있는 역량을 갖춘 업체다. 업체 관계자는 "비타메이트는 정기구독
                  방식으로 개인 맞춤형 영양제를 제공하는 프런티어 서비스 기업"이라고 말했다.
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </ContainerAside>
  )
}
