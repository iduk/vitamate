import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'
import TextInput from 'components/Forms/TextInput'
import Select from 'components/Forms/Select'

export default function Point() {
  const pointList = [
    {
      pointUseDate: '2020-09-09',
      pointUseTitle: '추천인 제품 구매 적립',
      pointUseState: '+', // 적립 +, 차감 -
      pointNumber: '10,000',
    },
    // {
    //   pointUseDate: '2019-09-11',
    //   pointUseTitle: '2019년 09월 정기 결제 금액',
    //   pointUseState: '-',
    //   pointNumber: '500',
    // },
    // {
    //   pointUseDate: '2017-01-26',
    //   pointUseTitle: '이벤트 상품 구매',
    //   pointUseState: '+',
    //   pointNumber: '999,909',
    // },
  ]

  const userBank = [
    { id: 'bank1', value: 'a', label: '은행선택' },
    { id: 'bank2', value: 'b', label: '카카오뱅크' },
    { id: 'bank3', value: 'c', label: 'KB국민은행' },
  ]

  return (
    <ContainerAside>
      <h1 className="page-title _sub">포인트</h1>
      <section>
        <article className="mt-6 px-6 py-5 rounded-lg shadow-md">
          <div className="block text-center justify-center lg:text-left lg:justify-start lg:flex items-center">
            <span className="inline-block lg:flex-0">
              <i className="rounded-full w-12 h-12 flex justify-center items-center bg-primary-100 text-primary-600 font-extrabold text-xl not-italic mr-4">
                P
              </i>
            </span>
            <p className="mt-5 mb-3 text-base lg:m-0 lg:flex-1 lg:text-xl leading-none">사용 가능한 포인트</p>
            <p className="inline-block lg:flex-용none lg:flex items-center">
              <span className="font-bold text-3xl lg:text-2xl">10,000</span>
              <span className="font-bold text-xl text-gray-400 ml-2">P</span>
            </p>
          </div>
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

        <hr className="my-8" />

        <h3 className="text-xl pb-3">포인트 계좌 입금</h3>
        <p className="text-gray-500 pb-4">잔여 포인트를 회원님 본인 명의의 계좌로 입금해 드립니다.</p>
        <div className="form-group grid grid-cols-1 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-max gap-4 items-end">
          <div className="lg:w-48">
            <Select label="입금 은행명" options={userBank} />
          </div>
          <TextInput label="예금주명" id="userBankName" type="text" placeholder="예금주명" value="김태훈" />
          <TextInput
            label="입금 계좌번호"
            id="userBankNumber"
            type="text"
            placeholder="계좌번호"
            value="1234-459-4545456"
          />
          <div>
            <button className="w-full lg:w-auto btn border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              입금하기
            </button>
          </div>
        </div>
      </section>
    </ContainerAside>
  )
}
