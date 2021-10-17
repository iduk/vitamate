import ContainerAside from 'components/Layouts/ContainerAside'
import { useState } from 'react'
import Img from 'next/image'
import Link from 'next/link'

export default function Support() {
  const [faq, setFaq] = useState(null)
  const [faqNav, setFaqNav] = useState(null)

  const toggle = (id) => {
    if (faq === id) {
      return setFaq(null)
    }
    setFaq(id)
  }

  const toggleNav = (id) => {
    if (faqNav === id) {
      return setFaqNav(null)
    }
    setFaqNav(id)
  }

  const faqCategories = [
    { id: 0, title: '전체', link: '' },
    { id: 1, title: '회원', link: '' },
    { id: 2, title: '설문', link: '' },
    { id: 3, title: '검사', link: '' },
    { id: 4, title: '제품', link: '' },
    { id: 5, title: '구독/결제', link: '' },
    { id: 6, title: '배송', link: '' },
    { id: 7, title: '기타', link: '' },
  ]

  const faqContent = [
    {
      title: 'DTC 유전자 검사시 유의 사항은 없나요?',
      contents:
        '유전자 검사는 꼭 서비스에 가입하신 분의 타액(침)으로 진행해 주세요. 다른 사람의 타액으로는 검사를 받으실 수 없습니다.타액을 채취할 때 오염되지 않도록 주의하여야 합니다. 타액이 최초 1회 오염될 경우, 마크로젠이 키트를 다시 보내드립니다. 고객님은 다시 한번 타액을 키트에 담아 마크로젠으로 보내셔야 합니다. 만약 두 번째 타액도 오염된다면 서비스는 해지됩니다. 고객님은 배송료 5천 원과 키트 비용 5천 원을 부담하셔야 합니다.',
    },
    {
      title: 'DTC 유전자 검사 항목의 정확성은 어떻게 되나요? ',
      contents:
        '이 검사에서 제공하는 결과는 해당 항목에 영향을 주는 환경 및 생활 습관 등 다른 요인을 고려하지 않고 유전자형에만 근거하여 분석하므로 현재의 상태와 다를 수 있습니다.각 항목에 영향을 주는 모든 유전자 마커(SNP)를 분석한 것은 아니며, 결과와 해석은 새로운 정보가 추가됨에 따라 변경될 수 있습니다. 검사에 사용된 유전자 종류 및 데이터베이스에 따라 다른 회사의 결과와 다를 수 있습니다. 인종에 따라 유전자형 분포와 위험도 결과에 차이가 있을 수 있습니다. 이 검사는 한국인에 최적화된 서비스로 한국인 데이터베이스에 기반한 분석 결과를 제공합니다. 이 검사는 유전적 위험도를 예측하는 자료이므로 위험도가 높다고 하여 반드시 질병이 발생한다는 의미는 아니며, 위험도가 낮다고 하여 질병이 발생하지 않는다는 의미가 아닙니다. 이 검사 결과는 질병의 진단 및 치료의 목적으로 사용될 수 없습니다. 의학적인 소견이 필요한 경우 의사와 상담하시기 바랍니다. 이 검사는 검사 결과가 갖는 임상적 의미가 확립되지 않았으며, 이에 따르는 건강에 관련된 행위가 유용하는 객관적 타당성이 아직 부족합니다.',
    },
    {
      title: 'DTC 유전자 검사시 유의 사항은 없나요?',
      contents:
        '유전자 검사는 꼭 서비스에 가입하신 분의 타액(침)으로 진행해 주세요. 다른 사람의 타액으로는 검사를 받으실 수 없습니다.타액을 채취할 때 오염되지 않도록 주의하여야 합니다. 타액이 최초 1회 오염될 경우, 마크로젠이 키트를 다시 보내드립니다. 고객님은 다시 한번 타액을 키트에 담아 마크로젠으로 보내셔야 합니다. 만약 두 번째 타액도 오염된다면 서비스는 해지됩니다. 고객님은 배송료 5천 원과 키트 비용 5천 원을 부담하셔야 합니다.',
    },
    {
      title: '검사키트 포장을 뜯지 않았는데 환불하고자 합니다. 검사키트값을 환불 받을 수 없나요? ',
      contents:
        '검사키트를 반송해 주시면 검사키트 확인 후 환불해 드립니다. 만약 포장상태가 파손되거나 오픈을 할 경우 4만원 (부가세포함) 을 공제하고 환불해 드립니다.',
    },
    {
      title: '건강설문와 DTC 유전자 분석 소요 기간은 어떻게 되나요?',
      contents: `* 유전자 분석 결과가 나오는 즉시 비타메이트만의 알고리즘 통한 분석으로 '맞춤영양소'를 추천해 드립니다.`,
    },
    {
      title: '추천제품 구매변경 (추가 구매) 할 수 있나요?',
      contents: `약정후 제품변경 (추가구매)을 하고자 하는 경우에는 [마이페이지]-> [ 맞춤정보]-> [수정하기]에서  제품 우측 체크박스의  체크를 한 후 저장하시면 제품이 추가가 되네요`,
    },
    {
      title: '추천제품 이외에 다른 제품을 구매할 수 있나요?',
      contents: `[마이페이지]-> [맞춤정보] 하단에 보시면 [제품 더보기]가 있습니다. 이 버튼을 클릭하시면 추천제품 이외에 다른 제품이 있습니다. 원하시는 제품 우측 체크박스의 체크를 하시고 저장하시면 됩니다. `,
    },
    {
      title: '이미 먹고 있는 영양제들이 있어요. 같이 먹으면 안되는 것이 있나요? ',
      contents: `섭취 중인 영양제에 따라 다릅니다. 복용하면 체내에 쌓여 부작용을 일으킬 수 있는 지용성 비타민  A,D,E,K 와는 일일 섭취량을 확인하시고 넘지 않게 섭취해 주세요`,
    },
    {
      title: '질병으로 인해 먹고 있는 약들이 있어요. 같이 먹으면 안되는 것이 있나요?',
      contents: `섭취 중인 복용약에 따라 다릅니다. 비타메이트에서는 건강설문에서 고객님이 복용하는 약을 확인 한 후 부작용이 발생할 수 있는 영양제는 추천하지 않습니다. 비타메이트에서 추천하는 영양제는 안심하고 드셔도 됩니다. `,
    },
  ]
  return (
    <ContainerAside>
      <h1 className="page-title _sub">FAQ</h1>
      <div className="container mx-auto">
        <ul className="tabs-faq">
          {faqCategories.map((item, id) => (
            <li key={id} className={`${faqNav === id ? 'active' : ''} tabs-faq--tab w-1/4 lg:w-auto`}>
              <Link href="#">
                <a onClick={() => toggleNav(id)}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full mx-auto">
          <ul>
            {faqContent.map((item, id) => (
              <li key={id} className="py-4 border-gray-200 border-solid border-b">
                {/* title */}
                <Link href="#">
                  <a className="flex justify-between items-center cursor-pointer" onClick={() => toggle(id)}>
                    <h3 className="w-10/12 font-normal">{item.title}</h3>
                    <span>
                      {faq === id ? (
                        <Img width={40} height={40} src="/images/ic-arrowup.svg" alt="up" />
                      ) : (
                        <Img width={40} height={40} src="/images/ic-arrowdown.svg" alt="down" />
                      )}
                    </span>
                  </a>
                </Link>

                {/* detail */}
                {faq === id ? (
                  <div className="p-5 bg-gray-100 rounded-b-lg mt-3">
                    <p className="text-gray-800">{item.contents}</p>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContainerAside>
  )
}
