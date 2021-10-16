import ContainerFluid from 'components/Layouts/ContainerFluid'

export default function TermsOfService() {
  return (
    <ContainerFluid>
      <div className={'container py-12 px-6 lg:px-0 lg:py-16'}>
        <h1 className="page-title">마케팅 수신 동의</h1>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">수집 및 활용 관련 정보</h2>
          <p>
            비타메이트(이하 “회사”)는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등
            정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한
            개인정보취급방침을 정하여 사용자 권익 보호에 최선을 다하고 있습니다.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">마케팅 활용 개요</h2>
          <p>
            ‘비타메이트’는 회원가입 시 수집된 개인정보를 이용하여 탈퇴 시까지 각종 서비스, 제품 및 유용한 컨텐츠에
            대해서 홍보, 구매권유, 프로모션, 이벤트 안내 등의 목적으로 본인에게 정보, 광고를 전화, 문자메시지, 카카오톡,
            페이스북 메시지, 이메일, 우편 및 앱 푸시 등의 방법으로 전달합니다.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">개인정보 관련 내용</h2>

          <ol className="leading-7 py-4">
            <li>개인 정보를 제공 받는 자 ; 비타메이트</li>
            <li>
              <p>개인정보 수집 이용 내용</p>
              <ol className="my-4">
                <li>전화 및 문자를 이용한 비타메이트 서비스 소개 및 판매, 사은 이벤트행사 안내</li>
                <li>경품지급, 사은행사 등 고객의 편의 제공</li>
                <li>시장조사 및 상품서비스 개발연구</li>
                <li>개인식별정보(성명, 연락처, 이메일)를 활용하여 동명이인 여부 확인</li>
              </ol>
            </li>
            <li>
              <p>개인정보의 항목</p>
              <p>- 개인식별정보 (성명, 연락처, 이메일), 동의 일자</p>
            </li>
            <li>
              <p>개인정보 보유 이용 기간</p>
              <p>- 동의일로부터 서비스 종료 시점까지</p>
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">
            ‘비타메이트’는 구매, 배송, 복용관리 등 의무적으로 안내되어야 하는 정보성 내용은 수신동의 여부와 무관하게
            제공됩니다.
          </h2>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">
            사이트 내 ‘MY비타’ 페이지 및 고객센터 또는 이메일을 통해 언제든 마케팅 활용 중단을 요청하실 수 있습니다.
          </h2>
        </div>
      </div>
    </ContainerFluid>
  )
}
