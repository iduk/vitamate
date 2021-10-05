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
                <h5 className="text-lg pb-3 ">비타메이트, 유전자 분석으로 맞춤 영양제 제공 서비스 출시</h5>
                <p className={'text-sm text-gray-400 pb-5'}>
                  파이낸셜뉴스 입력 2021.08.26 10:15 | 수정 2021.08.26 10:15
                </p>
                <p className="text-gray-800">
                  [파이낸셜뉴스]맞춤 영양제 시장 대표 브랜드 '비타메이트'가 '2021 대한민국 리딩기업 ‘K-스타트업대상'을
                  수상하면서 업계의 주목을 받고 있다. 비타메이트는 AI기반 유전자 개인 맞춤형 영양제 큐레이션 서비스
                  기업으로 지난해 특허등록을 마친 벤처기업이다. 26일 비타메이트에 따르면 비타메이트 서비스는 정기구독
                  방식으로 개인맞춤형 영양제를 제공하는 프론티어 서비스다. 유전자 검사와 건강 문진 등 개인의 신체정보를
                  AI기반 알고리즘으로 분석해 개인 맞춤형 영양제 조합을 도출하는 지능형 역량을 갖추고 있다.
                  DTC(개인유전체분석) 검사와 현재의 식습관 질병 상태를 종합해 개인마다 꼭 필요한 영양제를 도출해주는
                  AI기반 알고리즘을 개발했고 올 하반기 서비스를 출시 할 예정이다.
                  <br />
                  <br />
                  국내 건강기능식품의 규모는 지난해 4조원을 넘어섰고, 75%의 소비자가 TV홈쇼핑이나 인터넷광고를 보고
                  구매한다. 영양제를 구매할 때 성분이나 제조사를 보고 구매한다고는 하지만 정작 나에게 필요한
                  영양제인지는 개인이 알아서 판단해야 한다. 제약사나 건강기능식품 제조사는 꼭 필요한 영양제를 만들고
                  있지만 정작 소비자들은 자신에게 필요한 영양제를 알려주는 곳이 없기 때문에 자신의 몸 상태에 따라 알아서
                  선택할 수 밖에 없다.
                  <br />
                  <br />
                  비타메이트는 국내 1위 개인유전체 분석 기업인 마크로젠과의 협력을 통해 14가지의 개인 유전정보를 분석해
                  개인에게 필요한 영양 정보를 도출해 낼 수 있는 기반을 만들었다. 개인의 생활습관 및 기저질환 등의
                  데이터를 취합하기 위한 문진표를 만들어냈다. 이러한 정보를 AI기반 알고리즘으로 분석, 개인에게 필요한
                  영양제를 도출해 내는 과정에 IT기술을 접목했다. 비타메이트는 AI 전문가와 전문의가 참여해 개발한 AI
                  알고리즘이 선천적인 개인영양정보와 현재의 식습관을 분석하고 매달 정기구독형으로 영양제를 배송해 준다.
                  배송되는 영양제는 비타메이트가 개발한 한국인에게 꼭 필요한 14가지 영양제다. 월 배송서비스는 몸에 좋은
                  영양제를 집에 쌓아둘 일도 없어져 불필요한 영양제 소비를 막아주고 각 영양제마다 부형제로 들어있는 각종
                  영양제를 과남용 하지 않도록 도와준다.
                  <br />
                  <br /> 적절한 복용량, 복용시기까지 놓치지 않도록 스마트 폰 앱을 활용한 원격 알림 및 제어서비스도
                  제공된다. 비타메이트 김용만 대표는 “건강에 대한 관심이 증대되면서 영양제는 더 이상 선택이 아닌 필수가
                  되었다”며 “영양제의 과오남용을 막고, 본인에게 맞는 맞춤 영양제를 제대로 복용할 수 있도록 해줄
                  것"이라고 말했다. 비타메이트의 정기구독형 맞춤형 영양제는 10월 첫 출시를 앞두고 있으며, 회원가입을
                  통해 자신에게 맞는 영양제를 받아 볼 수 있다.
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
                <p className={'text-sm text-gray-400 pb-5'}>머니투데이 | 중기협력팀 이두리 기자</p>
                <p className="text-gray-800">
                  김용만 비타메이트 대표(사진 오른쪽 3번째)와 임직원들이 머니투데이 주최의 '2021 제7회 대한민국
                  리딩기업대상'에서 'AI 기반 유전자 개인 맞춤형 영양제 큐레이션 서비스' 부문 'K-스타트업대상'을 수상하고
                  기념사진을 찍고 있다.
                  <br />
                  <br />
                  비타메이트는 유전자 검사 및 건강 문진 등 개인의 신체정보를 AI(인공지능) 기반 알고리즘으로 분석, 고객
                  맞춤형의 영양제 조합을 도출할 수 있는 역량을 갖춘 업체다. 업체 관계자는 "비타메이트는 정기구독
                  방식으로 개인 맞춤형 영양제를 제공하는 프런티어 서비스 기업"이라고 말했다.
                  <br />
                  <br />
                </p>
                <small className="text-gray-500">
                  저작권자 © ‘돈이 보이는 리얼타임 뉴스’ 머니투데이, 무단전재 및 재배포 금지
                </small>
              </div>
            )}
          </li>
        </ul>
      </div>
    </ContainerAside>
  )
}
