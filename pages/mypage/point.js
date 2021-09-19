import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'

export default function Point() {
  const pointList = [
    {
      pointUseDate: '2020-09-09',
      pointUseTitle: '포인트 사용 내용ㅋ',
      pointUseState: '+', // 적립 +, 차감 -
      pointNumber: '1,000',
    },
    {
      pointUseDate: '2019-11-11',
      pointUseTitle: '내 포인트는 어디로 갔을까',
      pointUseState: '-',
      pointNumber: '500',
    },
    {
      pointUseDate: '2017-01-26',
      pointUseTitle: '이 포인트 어디서 났어!!',
      pointUseState: '+',
      pointNumber: '999,909',
    },
  ]
  return (
    <ContainerAside>
      <h1 className="page-title _sub">포인트</h1>
      <section>
        <article className="mt-6 px-6 py-5 flex justify-between rounded-lg shadow-md">
          <div className="flex items-center">
            <i className="rounded-full w-12 h-12 flex justify-center items-center bg-primary-100 text-primary-600 font-extrabold text-xl not-italic mr-4">
              P
            </i>
            <p className="text-xl leading-none">사용 가능한 포인트</p>
          </div>
          <div className="flex items-center ">
            <span className="font-bold text-2xl">909,267</span>
            <span className="font-bold text-xl text-gray-300 ml-2">P</span>
          </div>
        </article>

        <ul className="mt-10 border-b border-gray-200 overflow-hidden">
          {pointList.map((point, id) => (
            <li key="id" className="py-6 flex justify-between items-end border-t border-gray-200">
              <div>
                <h6 className="text-base text-gray-400 mb-2">{point.pointUseDate}</h6>
                <p className="text-lg leading-none">{point.pointUseTitle}</p>
              </div>
              {/* ------- 포인트 적립,차감에 따라 폰트색상변경 ------- */}
              <div className="flex items-center text-gray-500">
                <span
                  className={
                    'text-2xl font-normal leading-none ' +
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
