import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'

export default function Point() {
  const pointList = [
    {
      pointUseDate: '2020-09-09',
      pointUseTitle: '가입축하 포인트 적립',
      pointUseState: '+', // 적립 +, 차감 -
      pointNumber: '1,000',
    },
    {
      pointUseDate: '2019-09-11',
      pointUseTitle: '2019년 09월 정기 결제 금액',
      pointUseState: '-',
      pointNumber: '500',
    },
    {
      pointUseDate: '2017-01-26',
      pointUseTitle: '이벤트 상품 구매',
      pointUseState: '+',
      pointNumber: '999,909',
    },
  ]
  return (
    <ContainerAside>
      <h1 className="page-title _sub">포인트</h1>
      <section>
        <article className="mt-6 px-6 py-5 block text-center justify-center lg:text-left lg:justify-start lg:flex items-center rounded-lg shadow-md">
          <span className="inline-block lg:flex-0">
            <i className="rounded-full w-12 h-12 flex justify-center items-center bg-primary-100 text-primary-600 font-extrabold text-xl not-italic mr-4">
              P
            </i>
          </span>
          <p className="mt-5 mb-3 text-base lg:m-0 lg:flex-1 lg:text-xl leading-none">사용 가능한 포인트</p>
          <p className="inline-block lg:flex-none lg:flex items-center ">
            <span className="font-bold text-3xl lg:text-2xl">909,267</span>
            <span className="font-bold text-xl text-gray-400 ml-2">P</span>
          </p>
        </article>

        <ul className="mt-10 border-b border-gray-200 overflow-hidden">
          {pointList.map((point, id) => (
            <li key="id" className="py-6 grid grid-cols-2 items-end place-content-between border-t border-gray-200">
              <div>
                <h6 className="text-base text-gray-400 mb-2">{point.pointUseDate}</h6>
                <p className="text-lg leading-snug">{point.pointUseTitle}</p>
              </div>
              {/* ------- 포인트 적립,차감에 따라 폰트색상변경 ------- */}
              <div className="flex justify-end items-center text-gray-500">
                <span
                  className={
                    'text-2xl font-normal leading-snug ' +
                    (point.pointUseState === '+' ? 'text-primary-700' : 'text-gray-400')
                  }
                >
                  {point.pointUseState} {point.pointNumber}
                </span>
                <span className="text-xl text-gray-300 leading-none ml-2">P</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </ContainerAside>
  )
}
