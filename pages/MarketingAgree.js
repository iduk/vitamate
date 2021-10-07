import ContainerFluid from 'components/Layouts/ContainerFluid'

export default function TermsOfService() {
  return (
    <ContainerFluid>
      <div className={'container py-12 px-6 lg:px-0 lg:py-16'}>
        <h1 className="page-title">마케팅 수신 동의</h1>
        <div>
          <p className="mb-6">
            주식회사 비타메이트 (이하 ‘회사’는) 개인정보보호법 제22조 제4항에 의해 선택정보 사항에 대해서는 기재하지
            않아도 서비스를 이용할 수 있습니다.
          </p>
          <article className="mb-8">
            <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">1. 마케팅 및 광고 활용</h2>
            <ol className="leading-7 mt-4">
              <li className="py-2">신규 기능 개발 및 맞춤 서비스 제공</li>
              <li className="py-2">뉴스레터 발송, 새로운 기능(제품)의 안내</li>
              <li className="py-2">할인 및 쿠폰 등 이벤트 등의 광고성 정보 제공</li>
            </ol>
          </article>
          <article className="mb-8">
            <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">2. 마케팅 정보 제공</h2>
            <p>
              주식회사 비타메이트 (이하 ‘회사’는)는 서비스를 운용하는 과정에서 각종 정보를 서비스 화면, SMS, 푸시 알림,
              이메일 등의 방법으로 회원에게 제공할 수 있으며, 결제 안내 등 의무적으로 안내해야 하는 정보성 내용 및 일부
              혜택성 정보는 수신동의 여부와 무관하게 제공합니다.
            </p>
          </article>
        </div>
      </div>
    </ContainerFluid>
  )
}
