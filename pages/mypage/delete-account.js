import TextInput from 'components/Forms/TextInput'
import ContainerAside from 'components/Layouts/ContainerAside'
import Img from 'next/image'
import Link from 'next/link'

export default function deleteAccount() {
  return (
    <ContainerAside>
      <h1 className="page-title _sub">회원 탈퇴</h1>

      <article className="mt-6 p-6 bg-red-50 rounded-large">
        <div className="flex items-start mb-4">
          <Img src="/images/ic-notification.svg" width={32} height={32} alt="notification" />
          <div className="ml-4">
            <h2 className="text-xl pt-1 pb-4">회원 탈퇴 시 주의사항</h2>
            <ul className="list-disc ml-3 text-gray-600">
              <li className="">탈퇴 전에 진행중인 정기구독이 있다면 반드시 해지하셔야 합니다.</li>
              <li className="pt-1">
                탈퇴 후 고객님의 모든 할인 혜택은 바로 삭제되며, 재 가입시 기존의 혜택을 유지할 수 없습니다.
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article className="mt-4 p-6 bg-gray-100 rounded-large">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-normal">이용중인 정기구독</h2>
          <Link href="#">
            <a className="flex items-center">
              <span className="leading-none">1건</span>
              <Img src="/images/ic-arrow-next.svg" width={30} height={30} alt="right icon" />
            </a>
          </Link>
        </div>
      </article>

      <hr className="my-8" />

      <h3 className="text-xl pb-3">할인 혜택</h3>
      <p className="text-gray-500 pb-4">회원님은 탈퇴시 아래 혜택을 더 이상 받을 수 없습니다.</p>
      <ul className="block lg:flex">
        <li className="flex items-center text-gray-500">
          <span className="pr-2 text-gray-700">⋅</span>
          <span className="pr-4">약정 할인 혜택</span>
          <span className="text-gray-800 font-extrabold">20%</span>
        </li>
        <li className="flex items-center text-gray-500 lg:mx-6">
          <span className="pr-2 text-gray-700">⋅</span>
          <span className="pr-4">배송비 무료</span>
          <span className="text-gray-800 font-extrabold">2,500원</span>
        </li>
        <li className="flex items-center text-gray-500">
          <span className="pr-2 text-gray-700">⋅</span>
          <span className="pr-4">유전자 검사</span>
          <span className="text-gray-800 font-extrabold">2,500원</span>
        </li>
      </ul>

      <hr className="my-8" />

      <h3 className="text-xl pb-3">탈퇴 사유</h3>
      <p className="text-gray-500 pb-4">
        회원님께서 남겨주신 소중한 한마디를 참고하여 더 좋은 서비스로 다가가겠습니다.
      </p>
      <TextInput type="text" placeholder="탈퇴 사유를 입력해 주세요" className="text-lg" />

      <div className="text-right mt-8">
        <button
          onClick={() => alert('회원 탈퇴가 정상 처리되었습니다.')}
          className="rounded-md p-4 w-48 text-xl bg-gray-500 text-white hover:bg-gray-600 transition-colors ease-linear"
        >
          탈퇴하기
        </button>
      </div>
    </ContainerAside>
  )
}
