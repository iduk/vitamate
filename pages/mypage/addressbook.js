import ContainerAside from 'components/Layouts/ContainerAside'

export default function Addressbook() {
  const th = [
    { title: '배송지', align: 'left', size: 150 },
    { title: '주소', align: 'left', size: 350 },
    { title: '연락처', align: 'left', size: 150 },
    { title: '수정/삭제', align: 'left', size: '' },
  ]
  return (
    <ContainerAside>
      <header className="relative">
        <h1 className="page-title _sub">배송지 관리</h1>
        <div className="absolute right-0 -top-1">
          <button className="btn bg-primary-600 text-white hover:bg-primary-700">배송지 등록</button>
        </div>

        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              {th.map((label, id) => (
                <th
                  key={id}
                  className="py-4 pr-8 text-lg font-bold text-gray-900"
                  style={{
                    textAlign: label.align,
                    width: label.size,
                  }}
                >
                  {label.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              {/*--------- columns ---------*/}
              <td className="py-5 pr-8 text-lg align-top">
                <span className="px-2 py-2 rounded-lg border border-primary-600 text-primary-600 text-xs">
                  기본배송지
                </span>
                <p className="mt-2">서울에있는우리집얼마나길어져야될까</p>
              </td>

              <td className="py-5 pr-8 text-lg align-top">
                <span className="text-gray-400">06138</span>
                <p className="mt-2">서울특별시 강남구 언주로 533 (역삼동) 110-1203</p>
              </td>

              <td className="py-5 pr-8 text-lg align-top">
                <p>010-1234-5678</p>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </ContainerAside>
  )
}
