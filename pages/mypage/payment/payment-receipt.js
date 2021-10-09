import Link from 'next/link'
import Img from 'next/image'

export default function PaymentReceipt() {
  const orderList = [
    { title: '배송주소', content: '서울 강남구 도곡동 527-3 B123호' },
    { title: '배송메모', content: '경비실에 맡겨주세요' },
    { title: '배송상태', content: '배송 완료' },
    { title: '송장번호', content: '우체국택배 35456453565' },
    { title: '카드유형', content: 'Master Card' },
    { title: '카드번호', content: '1234-5***-****-****' },
    { title: '결제일자', content: '2021.10.09' },
    { title: '주문금액', content: '195,150원' },
    { title: '할인금액', content: '-48,850원' },
    { title: '배송요금', content: '2,500원' },
    { title: '결제금액', content: '146,300원' },
  ]

  const orderList1 = orderList.slice(0, 4)
  const orderList2 = orderList.slice(4)

  return (
    <>
      <div className="grid grid-cols-2 items-center">
        <p className="text-left">
          <span className="block text-sm text-gray-400">주문번호</span>
          <span className="block text-lg">PMBGZGGL6694</span>
        </p>
        <p className="text-right text-gray-500">2021.10.09 18:51</p>
      </div>

      <div className="mt-3 pt-3 border-t border-dashed">
        <h2 className="text-base pb-4">상품 정보</h2>

        <div className="flex">
          <span className="thumb thumb-small mr-4">
            <Img src="/images/product-omega.png" layout="fill" />
          </span>

          <dl className="py-1">
            <dt className="mb-1 text-lg">오메가메이트 외 4개</dt>
            <dd className="text-sm text-gray-500">결제 198,700원</dd>
          </dl>
        </div>
      </div>

      <article className="mt-3 pt-3 border-t border-dashed">
        <h2 className="text-lg pb-3">배송 정보</h2>
        <ul className="leading-loose">
          {orderList1.map((item) => (
            <li key={item.id} className="flex">
              <span className="inline-flex w-24 flex-shrink-0">{item.title}</span>
              <p className="text-gray-500">{item.content}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className="mt-3 pt-3 border-t border-dashed">
        <h2 className="text-lg pb-3">결제 정보</h2>
        <ul className="leading-loose">
          {orderList2.map((item) => (
            <li key={item.id} className="flex">
              <span className="inline-flex w-24 flex-shrink-0">{item.title}</span>
              <p className="text-gray-500">{item.content}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
