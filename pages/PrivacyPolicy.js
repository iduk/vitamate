import ContainerFluid from 'components/Layouts/ContainerFluid'

export default function TermsOfService() {
  return (
    <ContainerFluid>
      <h1 className="page-title _sub">개인정보취급방침</h1>
      <div>
        <p className="my-6">
          주식회사 비타메이트 (이하 ‘회사’는) 고객님의 개인정보를 중요시하며 개인정보보호법 등 관련 법령을 준수하고
          있습니다.
        </p>
        <div className="mb-8">
          <h2 className="text-xl py-6 mb-6 font-extrabold border-b border-gray-200">1. 개인 정보의 수집 및 이용목적</h2>
          <p>
            회사는 수집한 개인정보를 다음의 목적을 위해 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지
            않습니다.
          </p>
          <ol className="leading-7 mt-4">
            <li className="py-2">
              서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 제품구매 및 요금 결제, 물품배송 또는 청구지
              등 발송, 금융거래 본인 인증 및 금융 서비스
            </li>
            <li className="py-2">
              회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사
              확인, 불만처리 등 민원처리, 고지사항 전달
            </li>
            <li className="py-2">
              마케팅 및 광고에 활용 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
            </li>
          </ol>
        </div>
        <div className="mb-8">
          <h2 className="text-xl py-6 mb-6 font-extrabold border-b border-gray-200">
            2. 개인정보 수집항목 및 수집 방법
          </h2>
          <h3 className="text-base font-extrabold pt-4">가. 개인정보 수집 항목</h3>
          <ol className="leading-7 py-6">
            <li className="py-2">회원가입시(필수): 휴대폰 번호, 비밀번호 - 회원가입시(선택): 추천인코드</li>
            <li className="py-2">DTC 유전자검사 신청시 (필수) : 성명, 성별, 생년월일, 휴대폰번호, 이메일, 주소</li>
            <li className="py-2">설문 참여시(선택): 성별, 연령대, 건강과 관련된 정보</li>
            <li className="py-2">
              구매 또는 서비스 신청시(필수): 결제 정보, 수취인의 배송지 정보(수취인명, 휴대전화번호, 수취인 주소)
            </li>
            <li className="py-2">
              모바일앱 사용 시: 앱 버전, OS버전, 서비스 이용 과정이나 사업 처리 과정에서 서비스 이용 기록, 접속 로그,
              쿠키, 접속 IP, 결제 기록, 불량 이용 기록, ADID/IDFA(광고 식별자)가 생성되어 수집
            </li>
          </ol>
          <h3 className="text-base font-extrabold pt-4">나. 개인정보 수집 방법</h3>
          <ol className="leading-7 py-6">
            <li className="py-2">
              홈페이지, 모바일 앱, 설문 진행, 서면양식, 게시판, 이메일, 이벤트 응모, 배송요청, 전화, 팩스, 생성 정보
              수집 툴을 통한 수집
            </li>
          </ol>
        </div>
        <div className="mb-8">
          <h2 className="text-xl py-6 mb-6 font-extrabold border-b border-gray-200">3. 개인정보의 보유 및 이용기간</h2>
          <p>
            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에
            대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
          </p>
          <h3 className="text-base font-extrabold pt-4">
            가. 회사 내부방침에 의한 정보보유 사유 회원이 탈퇴한 경우에도 불량회원의 부정한 이용의 재발을 방지, 분쟁해결
            및 수사기관의 요청에 따른 협조를 위하여, 이용계약 해지일로부터 3년간 회원의 정보를 보유할 수 있습니다.
          </h3>
          <h3 className="text-base font-extrabold pt-4">
            나. 관련 법령에 의한 정보 보유 사유 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여
            보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
          </h3>
          <ol className="leading-7 py-6">
            <li className="py-2">
              계약 또는 청약철회 등에 관한 기록 -보존이유: 전자상거래 등에서의 소비자보호에 관한 법률 -보존기간: 5년
            </li>
            <li className="py-2">
              대금 결제 및 재화 등의 공급에 관한 기록 -보존이유: 전자상거래 등에서의 소비자보호에한 법률 -보존기간: 5년
            </li>
            <li className="py-2">
              소비자 불만 또는 분쟁처리에 관한 기록 -보존이유: 전자상거래 등에서의 소비자보호에 관한 법률 -보존기간: 3년
            </li>
            <li className="py-2">로그 기록 -보존이유: 통신비밀보호법 -보존기간: 3개월</li>
          </ol>
        </div>
        <div className="mb-8">
          <h2 className="text-xl py-6 mb-6 font-extrabold border-b border-gray-200">4. 개인정보의 파기절차 및 방법</h2>
          <p>
            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에
            대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
          </p>
          <ol className="leading-7 py-6">
            <li className="py-2">
              파기절차는 회원님이 회원가입, DTC 유전자검사, 건강설문 등을 위해 입력하신 정보는 목적이 달성된 후 별도의
              DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및
              이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가
              아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
            </li>
            <li className="py-2">
              파기방법은 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
            </li>
          </ol>
        </div>
        <div className="mb-8">
          <h2 className="text-xl py-6 mb-6 font-extrabold border-b border-gray-200">5. 개인정보 제공</h2>
          <p>여기 할 차례</p>
        </div>
      </div>
    </ContainerFluid>
  )
}
