import Img from 'next/image'
import Link from 'next/link'

export default function productItem() {
  return (
    <article className="" style={{ maxHeight: '65vh' }}>
      <div className="flex justify-between">
        <div className="w-full">
          <h6 className="text-sm font-normal text-primary-600 mb-1">퓨어코어 종합 멀티 비타민 미네랄</h6>
          <h4 className="text-lg leading-normal text-gray-600 mb-2">
            자연 유래 건조효모를 주원료로 빈틈없이 채운 11가지 기능성을 한번에!
          </h4>
          <p className="text-sm text-gray-400">
            ADK는 그냥 단순한 비타민A, D, K가 아닙니다. 비타민A, D, K는 힘을 합쳐 더욱 큰 효과를 낼 수 있습니다. 다양한
            비타민이 융합된 제품입니다.
          </p>
        </div>
        <div className="ml-8 flex-shrink-0">
          <span
            className="rounded-lg thumb-large block bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/4058370/pexels-photo-4058370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750)',
            }}
          ></span>
        </div>
      </div>

      <ul>
        <li className="mt-8">
          <h6 className="text-sm font-normal mb-1">상품 성분</h6>
          <p className="text-sm font-normal text-gray-400">
            치커리뿌리 추출물, 전지분유, 유기농 과채17종, 곡물발효 효소 15종, 베리농축분말 7종, 식물 혼합추출물 19종,
            허브추출물 6종
          </p>
        </li>
        <li className="mt-8">
          <h6 className="text-sm font-normal mb-1">유의 사항</h6>
          <p className="text-sm font-normal text-gray-400">
            권장 복용량을 초과하지 마십시오. 임신부 또는 수유 중인 산모이거나 질병이 있는 경우 이 제품이나 다른 보충제를
            복용하기 전에 의사와 상담하십시오. 표시된 성분에 대해 알레르기가 있거나 민감한 분은 주의해서 사용하십시오.
            수술 예정인 경우에는 수술 2주 전에 복용을 중단하십시오. 본 제품은 만 18세 미만에게 적합하지 않습니다.
          </p>
        </li>
        <li className="mt-8">
          <h6 className="text-sm font-normal mb-1">상품 금액</h6>
          <ul className="grid lg:grid-cols-12">
            <li className="mb-3 lg:mr-3 col-span-12 lg:col-span-3">
              <div className="rounded-lg bg-gray-100 p-4">
                <h6 className="font-normal text-gray-500 mb-5">정가</h6>
                <p className="text-right lg:text-left">
                  <span className="font-bold text-xl">30,000</span>
                  <span className="text-sm ml-1 text-gray-400">원</span>
                </p>
              </div>
            </li>
            <li className="col-span-4 lg:col-span-3">
              <div className="rounded-lg lg:rounded-r-none bg-primary-100 p-4">
                <h6 className="font-normal text-gray-500 mb-5">1년 약정시</h6>
                <p>
                  <span className="font-bold text-xl">30,000</span>
                  <span className="text-sm ml-1 text-gray-400">원</span>
                </p>
              </div>
            </li>
            <li className="col-span-4 lg:col-span-3">
              <div className="rounded-lg lg:rounded-none bg-primary-100 p-4">
                <h6 className="font-normal text-gray-500 mb-5">2년 약정시</h6>
                <p>
                  <span className="font-bold text-xl">30,000</span>
                  <span className="text-sm ml-1 text-gray-400">원</span>
                </p>
              </div>
            </li>
            <li className="col-span-4 lg:col-span-3">
              <div className="rounded-lg lg:rounded-l-none bg-primary-100 p-4">
                <h6 className="font-normal text-gray-500 mb-5">3년 약정시</h6>
                <p>
                  <span className="font-bold text-xl">30,000</span>
                  <span className="text-sm ml-1 text-gray-400">원</span>
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  )
}
