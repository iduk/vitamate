import Img from 'next/image'
import Link from 'next/link'

export default function productItems() {
  return (
    <article className="" style={{ maxHeight: '65vh' }}>
      <div className="flex justify-between">
        <div className="w-full">
          <h6 className="text-3xl font-bold mb-2">오메가메이트</h6>
          <h4 className="text-base text-primary-600 leading-normal text-gray-600 mb-5">
            혈행 개선에 도움, 기억력 개선, 눈 건강 개선에 도움
          </h4>
          <div className="text-sm leading-normal">
            <h6 className="text-black mb-1">일일섭취량 / 복용법</h6>
            <p className="text-gray-500">760mg 2캡슐</p>
            <p className="text-sm text-gray-500">1일 1회 2캡슐 또는 1일 1캡슐씩 2회 물과 함께 섭취</p>
          </div>
        </div>
        <div className="ml-8 flex-shrink-0">
          <span
            className="rounded-lg thumb-large block bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: 'url(/images/product-lutein.png)',
            }}
          ></span>
        </div>
      </div>

      <ul>
        <li className="mt-8">
          <h6 className="text-sm font-normal mb-1">상품 성분</h6>
          <p className="text-sm font-normal text-gray-400">
            치커리뿌리추출물, 전지분유, 유기농과채 17종, 곡물발효효소 15종, 베리농축분말 7종, 식물혼합추출물 19종,
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
                <h6 className="font-normal text-gray-600 mb-5">정가</h6>
                <p className="text-right lg:text-left">
                  <span className="font-bold text-xl">35,000</span>
                  <span className="text-sm ml-1 text-gray-400">원</span>
                </p>
              </div>
            </li>
            <li className="col-span-4 lg:col-span-3">
              <div className="rounded-lg rounded-r-none bg-primary-100 p-4">
                <h6 className="font-normal text-primary-600 mb-5">1년 약정시</h6>
                <p>
                  <span className="font-bold text-xl">30,500</span>
                  <span className="text-sm ml-1 text-gray-400">원</span>
                </p>
              </div>
            </li>
            <li className="col-span-4 lg:col-span-3">
              <div className="rounded-none bg-primary-100 p-4">
                <h6 className="font-normal text-primary-600 mb-5">2년 약정시</h6>
                <p>
                  <span className="font-bold text-xl">28,500</span>
                  <span className="text-sm ml-1 text-gray-400">원</span>
                </p>
              </div>
            </li>
            <li className="col-span-4 lg:col-span-3">
              <div className="rounded-lg rounded-l-none bg-primary-100 p-4">
                <h6 className="font-normal text-primary-600 mb-5">3년 약정시</h6>
                <p>
                  <span className="font-bold text-xl">26,500</span>
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
