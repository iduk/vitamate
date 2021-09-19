import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'

export default function Addressbook() {
  const th = [
    { title: '배송지명', align: 'left', size: 160 },
    { title: '주소', align: 'left', size: 330 },
    { title: '연락처', align: 'left', size: 180 },
    { title: '수정/삭제', align: 'left', size: '' },
  ]
  return (
    <ContainerAside>
      <header className="relative">
        <h1 className="page-title _sub">배송지 관리</h1>
        <div className="absolute right-0 -top-1">
          <button className="btn bg-primary-600 text-white hover:bg-primary-700">배송지 등록</button>
        </div>
      </header>
      <article>
        <Link href="#">
          <a className="mt-6 flex justify-between px-8 py-8 border border-gray-300 rounded-lg hover:border-gray-500 hover:shadow hover:transition duration-200 ease-in-out">
            <div>
              <dl>
                <dt className="mb-2 text-xl leading-none font-bold flex items-center">
                  <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-primary-600 border border-primary-600 rounded">
                    기본배송지
                  </span>
                  나의강남권아파트
                </dt>
                <dd className="text-lg">
                  <span className="text-primary-600 mr-2">04348</span>
                  서울특별시 용산구 이태원로55길 3-10(한남동)
                </dd>
                <dd className="flex items-center text-gray-600 mt-4">
                  <span className="text-gray-400 text-sm mr-3">연락처</span> 010-0000-0000
                </dd>
              </dl>
            </div>
            {/* ---- 수정,삭제 ---- */}
            <div>
              <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:bg-gray-100">
                수정
              </button>
              <span className="mx-1"></span>
              <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:border-gray-400">
                삭제
              </button>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a className="mt-6 flex justify-between px-8 py-8 border border-gray-300 rounded-lg hover:border-gray-500 hover:shadow hover:transition duration-200 ease-in-out">
            <div>
              <dl>
                <dt className="mb-2 text-xl leading-none font-bold flex items-center">나의강남권아파트</dt>
                <dd className="text-lg">
                  <span className="text-primary-600 mr-2">04348</span>
                  서울특별시 용산구 이태원로55길 3-10(한남동)
                </dd>
                <dd className="flex items-center text-gray-600 mt-4">
                  <span className="text-gray-400 text-sm mr-3">연락처</span> 010-0000-0000
                </dd>
              </dl>
            </div>
            {/* ---- 수정,삭제 ---- */}
            <div>
              <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:bg-gray-100">
                수정
              </button>
              <span className="mx-1"></span>
              <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:border-gray-400">
                삭제
              </button>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a className="mt-6 flex justify-between px-8 py-8 border border-gray-300 rounded-lg hover:border-gray-500 hover:shadow hover:transition duration-200 ease-in-out">
            <div>
              <dl>
                <dt className="mb-2 text-xl leading-none font-bold flex items-center">나의강남권아파트</dt>
                <dd className="text-lg">
                  <span className="text-primary-600 mr-2">04348</span>
                  서울특별시 용산구 이태원로55길 3-10(한남동)
                </dd>
                <dd className="flex items-center text-gray-600 mt-4">
                  <span className="text-gray-400 text-sm mr-3">연락처</span> 010-0000-0000
                </dd>
              </dl>
            </div>
            {/* ---- 수정,삭제 ---- */}
            <div>
              <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:bg-gray-100">
                수정
              </button>
              <span className="mx-1"></span>
              <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:border-gray-400">
                삭제
              </button>
            </div>
          </a>
        </Link>

        <div className="mt-10 text-right">
          <button className="btn border border-primary-600 text-primary-600 hover:border-primary-700 hover:text-primary-700 hover:shadow">
            기본 배송지로 등록
          </button>
        </div>
      </article>

      <div className="mt-20" style={{ display: 'none' }}>
        <table className="min-w-full leading-normal border-b border-gray-200">
          <thead>
            <tr>
              {th.map((label, id) => (
                <th
                  key={id}
                  className="py-4 pr-8 font-bold text-gray-900"
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
              {/*--------- 배송지 ---------*/}
              <td className="py-5 pr-8 align-top">
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-primary-600 border border-primary-600 rounded">
                  기본배송지
                </span>
                <p>국립한글박물관</p>
              </td>
              {/*--------- 주소 ---------*/}
              <td className="py-5 pr-8 align-top">
                <span className="text-gray-400">04383</span>
                <p>서울특별시 용산구 서빙고로 139(용산동6가)</p>
              </td>

              {/*--------- 연락처 ---------*/}
              <td className="py-5 pr-8 align-top">
                <p>010-1234-5678</p>
              </td>
              {/*--------- 수정/삭제 ---------*/}
              <td className="py-5 align-top">
                <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:bg-gray-100">
                  수정
                </button>
                <span className="mx-1"></span>
                <button className="py-2 px-5 rounded border text-base border-gray-300 text-danger-600 hover:bg-danger-50">
                  삭제
                </button>
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              {/*--------- 배송지 ---------*/}
              <td className="py-5 pr-8 align-top">
                <p>회사</p>
              </td>
              {/*--------- 주소 ---------*/}
              <td className="py-5 pr-8 align-top">
                <span className="text-gray-400">04348</span>
                <p>서울특별시 용산구 이태원로55길 3-10(한남동)</p>
              </td>

              {/*--------- 연락처 ---------*/}
              <td className="py-5 pr-8 align-top">
                <p>010-1234-5678</p>
              </td>
              {/*--------- 수정/삭제 ---------*/}
              <td className="py-5 align-top">
                <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:bg-gray-100">
                  수정
                </button>
                <span className="mx-1"></span>
                <button className="py-2 px-5 rounded border text-base border-gray-300 text-danger-600 hover:bg-danger-50">
                  삭제
                </button>
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              {/*--------- 배송지 ---------*/}
              <td className="py-5 pr-8 align-top">
                <p>여긴어디</p>
              </td>
              {/*--------- 주소 ---------*/}
              <td className="py-5 pr-8 align-top">
                <span className="text-gray-400">30116</span>
                <p>세종특별자치시 한누리대로 411(어진동)</p>
              </td>

              {/*--------- 연락처 ---------*/}
              <td className="py-5 pr-8 align-top">
                <p>010-1234-5678</p>
              </td>
              {/*--------- 수정/삭제 ---------*/}
              <td className="py-5 align-top">
                <button className="py-2 px-5 rounded border text-base border-gray-300 text-gray-600 hover:bg-gray-100">
                  수정
                </button>
                <span className="mx-1"></span>
                <button className="py-2 px-5 rounded border text-base border-gray-300 text-danger-600 hover:bg-danger-50">
                  삭제
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContainerAside>
  )
}
