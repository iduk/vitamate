function Privacy() {
  return (
    <>
      <h1 className="page-title">개인정보취급방침</h1>
      <div>
        <p className="mb-6">
          주식회사 비타메이트 (이하 ‘회사’는) 고객님의 개인정보를 중요시하며 개인정보보호법 등 관련 법령을 준수하고
          있습니다.
        </p>
        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">1. 개인 정보의 수집 및 이용목적</h2>
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
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">
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
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">3. 개인정보의 보유 및 이용기간</h2>
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
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">4. 개인정보의 파기절차 및 방법</h2>
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
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">5. 개인정보 제공</h2>
          <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
          <ol className="leading-7 py-6">
            <li className="py-2">이용자들이 사전에 동의한 경우</li>
            <li className="py-2">
              법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">6. 개인정보처리 위탁</h2>
          <p>
            수집한 개인정보의 위탁 회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.
          </p>
          <ol className="leading-7 py-6">
            <li className="py-2">결제 서비스 </li>
            <li className="py-2">아마존 웹 서비스 (보안 및 서비스 인프라 강화) </li>
            <li className="py-2">택배 배송 서비스</li>
            <li className="py-2">카카오 알림톡, SMS/LMS/MMS 발송 서비스</li>
            <li className="py-2">이메일 서비스</li>
          </ol>
          <p>
            회사는 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적
            보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고,
            수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
          </p>
          <p className="pt-3">
            위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
            정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수
            있습니다.
          </p>
          <p className="pt-3">
            정보주체는 비타메이트에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
          </p>
          <ol className="leading-7 py-6">
            <li className="py-2">개인정보 열람요구</li>
            <li className="py-2">오류 등이 있을 경우 정정 요구</li>
            <li className="py-2">삭제요구</li>
            <li className="py-2">처리정지 요구</li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">
            7. 이용자 및 법정 대리인의 권리와 그 행사 방법
          </h2>
          <ol className="leading-7">
            <li>
              이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도
              있습니다.
            </li>
            <li>
              이용자들의 개인정보 조회, 수정을 위해서는 "개인정보변경"(또는 "회원정보수정" 등)을 가입해지(동의철회)를
              위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은
              개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
            </li>
            <li>
              개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지
              않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이
              통지하여 정정이 이루어지도록 하겠습니다.
            </li>
            <li>
              회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에
              명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">
            8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
          </h2>
          <ol className="leading-7">
            <li>
              회사는 개별적인 맞춤 서비스를 제공하기 위해 개인 정보를 수시로 저장하고 찾아내는 "쿠키(cookie)" 등을
              사용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트
              파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.
            </li>
          </ol>

          <h3 className="text-base font-extrabold pt-6">가. 쿠키의 사용 목적</h3>
          <ol className="leading-7 pt-4">
            <li>회원과 비회원의 접속 빈도나 방문 시간 등을 분석</li>
            <li>이용자의 취향과 관심분야를 파악 및 자취 추적</li>
            <li>각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공</li>
          </ol>

          <h3 className="text-base font-extrabold pt-6">나. 쿠키 설치의 선택권</h3>
          <p className="pt-4">
            웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든
            쿠키의 저장을 거부할 수도 있습니다.
          </p>

          <h3 className="text-base font-extrabold pt-6">다. 쿠키 설정 거부 방법</h3>
          <ol className="leading-7 pt-4">
            <li>
              쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용
              하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
            </li>
            <li>
              설정방법 예(인터넷 익스플로어의 경우): 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보메뉴의 옵션 설정을
              통해 쿠키 저장을 거부 할 수 있습니다. 단, 쿠키 설치를 거부하였을 경우 맞춤형 서비스 제공에 어려움이 발생
              할 수 있습니다.
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">9. 개인정보 보호책임자 지정</h2>
          <p>
            회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및
            개인정보관리책임자를 지정하고 있습니다.
          </p>
          <ol className="leading-7 pt-6">
            <li>
              <p>개인정보관리 책임자</p>
              <div className="my-2 text-gray-500">
                <p>성명:</p>
                <p>연락처:</p>
                <p>이메일:</p>
              </div>
              <p>
                귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은
                담당부서로 신고하실 수 있습니다. 또한 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴
                것입니다.
              </p>
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="text-lg py-4 mb-4 font-extrabold border-b border-gray-200">
            10. 개인정보처리방침의 개정과 그 공지
          </h2>
          <p>
            이 개인정보처리방침은 2021년 0월 0일부터 적용됩니다. 현 개인정보처리방침이 회사 또는 정부의 정책, 보안기술의
            변경에 따라 내용의 추가, 삭제 및 변경이 있을 경우, 회사는 변경사항의 시행 7일 전부터 인터넷 홈페이지,
            어플리케이션의 '공지사항'을 통해 고지할 것입니다. 변경된 개인정보처리방침은 변경 고지한 날로부터 7일 후부터
            효력이 발생합니다. 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </>
  )
}
export default Privacy
