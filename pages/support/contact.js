import Select from 'components/Forms/Select'
import TextInput from 'components/Forms/TextInput'
import ContainerAside from 'components/Layouts/ContainerAside'
import Link from 'next/link'

export default function Support() {
  const option = [
    { id: 'hahaha', value: 'HOHOHO', label: '질문유형선택' },
    { id: 'hahaha', value: 'HOHOHO', label: '배송관련' },
    { id: 'hahaha', value: 'HOHOHO', label: '유전자검사관련' },
  ]
  const tel_type = [
    { id: 'hahaha', value: 'HOHOHO', label: '선택' },
    { id: 'hahaha', value: 'HOHOHO', label: '010' },
  ]

  return (
    <ContainerAside>
      <h1 className="page-title _sub">1:1 문의</h1>
      <div className="my-6 p-6 leading-normal text-gray-500 bg-gray-100 rounded-lg" role="alert">
        <p>문의 하신 내용은 최대 영업일 기준 2일 안에 선택하신 답변 제공 방법에 따라 답변드립니다.</p>
      </div>

      <form>
        <div className="form-group">
          <Select label="유형" options={option} />
        </div>
        <div className="form-group">
          <TextInput type="email" label="유형" placeholder="abc@mail.com" />
        </div>
        <div className="form-group">
          <label>연락처</label>
          <ul className="flex justify-between" style={{ width: 400 }}>
            <li className="flex-shrink-0">
              <Select options={tel_type} />
            </li>
            <li className="px-4">
              <TextInput type="tel" placeholder="0000" />
            </li>
            <li className="">
              <TextInput type="tel" placeholder="0000" />
            </li>
          </ul>
        </div>
        <div className="form-group">
          <TextInput type="text" label="제목" placeholder="제목을 입력해주세요" />
        </div>
        <div className="form-group form-control">
          <label htmlFor="aaa">문의 내용</label>
          <textarea name="content" id="aaa" rows="6" placeholder="내용을 입력해주세요"></textarea>
        </div>

        <div className="form-group">
          <div className="flex justify-between items-center">
            <div className="form-checkbox flex-shrink-0">
              <label htmlFor="check-1" className="inline-flex items-center py-2">
                <input id="check-1" type="checkbox" />
                <p className="ml-3">
                  <span className="text-primary-600 font-bold">[필수]</span>
                  개인 정보 수집 및 이용 동의
                </p>
              </label>
            </div>
            <Link href="/PrivacyPolicy">
              <a className="p-2 text-sm text-gray-500 underline">전문보기</a>
            </Link>
          </div>
        </div>
        <div className="mt-10 text-right">
          <button type="submit" className="w-40 text-lg p-4 rounded bg-primary-600 text-white hover:bg-primary-700 ">
            문의하기
          </button>
        </div>
      </form>
    </ContainerAside>
  )
}
