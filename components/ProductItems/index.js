import Img from 'next/image'
import Link from 'next/link'

export default function productItems() {
  return (
    <article>
      <div className="flex justify-between">
        <div className="w-full">
          <h6 className="text-3xl font-bold mb-2">오메가메이트</h6>
          <h4 className="text-base leading-normal text-gray-600 mb-5">
            혈행 개선에 도움, 기억력 개선, 눈 건강 개선에 도움
          </h4>
          <div className="text-base leading-normal">
            <h6 className="text-black mb-1">일일섭취량 / 복용법</h6>
            <div className="text-sm font-normal text-gray-500">
              <p>760mg 2캡슐</p>
              <p>1일 1회 2캡슐 또는 1일 1캡슐씩 2회 물과 함께 섭취</p>
            </div>
          </div>
        </div>
        <div className="ml-4 lg:ml-8 lg:flex-shrink-0">
          <span
            className="rounded-lg thumb lg:thumb-large block bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: 'url(/images/product-lutein.png)',
            }}
          ></span>
        </div>
      </div>

      <ul>
        <li className="mt-6">
          <h6 className="text-base font-normal mb-1">상품 성분</h6>
          <p className="text-sm font-normal text-gray-500">오메가 900mg, 비타민E 11mg</p>
        </li>
        <li className="mt-6">
          <h6 className="text-base font-normal mb-1">유의 사항</h6>
          <div className="text-sm font-normal text-gray-500">
            <p>1. 항응고제, 항혈소판제 등 복용 시 전문가와 상담하세요</p>
            <p>2. 개인에 따라 피부 관련 이상반응이 발생할 수 있어요</p>
            <p>3. 이상사례 발생 시 섭취를 중단하고 전문가와 상담하세요</p>
            <p>4. 당뇨병으로 혈당강하제와같이 복용시 항당뇨 효과가 감소할 수 있어요</p>
          </div>
        </li>
        <li className="mt-6">
          <h6 className="text-base font-normal mb-1">상품 금액</h6>
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
