import ContainerAside from 'components/Layouts/ContainerAside'
import Img from 'next/image'
import Link from 'next/link'

export default function deleteAccount() {
  return (
    <ContainerAside>
      <h1 className="page-title _sub">회원 탈퇴</h1>

      <article className="mt-6 px-10 py-6 bg-red-50 rounded-large">
        <div className="flex items-start mb-4">
          <Img src="/images/ic-notification.svg" width={32} height={32} alt="notification" />
          <ul className="ml-4 mt-1 leading-normal">
            <h2 className="text-xl mb-3">회원 탈퇴 시 주의사항</h2>

            <li>⋅ 탈퇴 전에 진행중인 정기구독이 있다면 반드시 해지하셔야 합니다.</li>
            <li>⋅ 탈퇴 후 고객님의 모든 할인 혜택은 바로 삭제되며, 재 가입시 기존의 혜택을 유지할 수 없습니다.</li>
          </ul>
        </div>
      </article>

      <article className="mt-6 px-10 py-6 bg-gray-100 rounded-large">
        <div className="flex justify-between">
          <h2 className="">이용중인 정기구독</h2>
          <p>1건 ></p>
        </div>
      </article>
    </ContainerAside>
  )
}
