import ContainerFluid from 'components/Layouts/ContainerFluid'
import Img from 'next/image'

const dtcProccess = [
  { title: '키트 제공', content: '키트 구성품과 키트 번호를 확인합니다' },
  { title: '동의서 작성', content: 'QR코드를 통해 전자동의시스템에 접속하여 동의서와 의뢰서를 작성합니다' },
  { title: '타액 채취', content: '키트 설명서와 동영상을 참고하여 타액을 체취합니다' },
  { title: '키트 밀봉', content: '키트를 반송용 봉투에 담아 밀봉합니다' },
  { title: '키트 반송', content: '동봉된 스티커를 붙여 지정택배사를 통해 반송합니다' },
  { title: '결과 확인', content: '분석이 완료되면 2주 이내에 안내를 드립니다' },
]
const dtcCategories = [
  {
    icon: 'ic-nutrient',
    title: '영양소',
    qtt: 17,
    content:
      '비타민A/B6/B12 / C/D/E/K, 코엔자임Q10, 마그네슘, 루테인&지아잔틴, 아연, 칼륨, 칼슘, 아르기닌, 오메가3, 셀레늄',
  },
  {
    icon: 'ic-exercise',
    title: '운동특성',
    qtt: 6,
    content: '근력/유산소/지구력 운동적합성, 근육발달능력, 발목부상 위험도,운동 후 회복능력',
  },
  {
    icon: 'ic-skin',
    title: '피부/모발',
    qtt: 5,
    content: '기미/주근깨,  피부노화, 피부염증,(아토피피부염), 남성형탈모, 모발굵기',
  },
  {
    icon: 'ic-eating',
    title: '식습관',
    qtt: 4,
    content: '식욕, 포만감, 단맛/짠맛 민감도',
  },
  {
    icon: 'ic-nicotine',
    title: '개인특성',
    qtt: 5,
    content: '카페인 대사, 니코틴 의존성, 알코올 대사/의존성, 불면증',
  },
  {
    icon: 'ic-healthcare',
    title: '건강관리',
    qtt: 13,
    content:
      '퇴행성 관절염증 감수성, 비만, 요산지, 중성지방도, 체지방률,콜레스테롤 HDLc/LDLc), 혈당 (공복), 혈압 (평균), 골질량, 복부비만 (엉덩이허리비율), 운동에 의한  체중감량효과, 요요가능성',
  },
]

export default function Dtc() {
  return (
    <ContainerFluid>
      <div className={'container px-4 lg:px-0 py-24'}>
        <section className="flex flex-wrap justify-center overflow-hidden">
          <article className="mt-10 lg:my-4 w-full overflow-hidden lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <Img
                className="rounded-large shadow"
                width={500}
                height={350}
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </div>
          </article>

          <article className="lg:my-4 w-full overflow-hidden lg:w-1/2 order-1 lg:order-2">
            <div className="lg:py-10 lg:px-8">
              <h2 className="text-3xl leading-snug lg:text-4xl lg:leading-snug font-light">
                개인 맞춤 영양소 추천을 위해
                <br className="hidden lg:block" /> <b>정밀의학분야 선도기업인 마크로젠과 협력</b>하고 있습니다.
              </h2>
              <ul className="product-list text-base lg:text-lg lg:leading-10 pt-8">
                <li className="flex">
                  <span className={'mr-3 relative'} style={{ zIndex: -1 }}>
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  <p>글로벌 최정상 수준급 유전체 분석 인프라 보유</p>
                </li>
                <li className="flex">
                  <span className={'mr-3 relative'} style={{ zIndex: -1 }}>
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  <p>현존하는 가장 정밀한 아시아인 표준 게놈 지도 구축</p>
                </li>
                <li className="flex">
                  <span className={'mr-3 relative'} style={{ zIndex: -1 }}>
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  <p>믿을 수 있는 데이터 관리 체계</p>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>

      <section className="bg-gray-100 py-24 relative">
        <div className="container px-10">
          <h2 className="text-3xl leading-snug lg:text-4xl lg:leading-snug text-center pb-10">유전자 검사 순서</h2>
          <ul className="proccess-list lg:flex lg:justify-between">
            {dtcProccess.map((item, index) => (
              <li key={index} className="lg:text-center lg:p-2 lg:w-1/6 lg:block flex  text-left py-3">
                <h3
                  className={`z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300 grid place-content-center text-lg lg:mx-auto ${
                    index === 5 && 'border-primary-600 bg-primary-600 text-white'
                  } `}
                >
                  {index + 1}
                </h3>
                <dl className={`${index === 5 && 'text-primary-600'} w-full ml-5 lg:ml-0 lg:mt-5`}>
                  <dt className="font-bold text-xl lg:mb-2">{item.title}</dt>
                  <dd className="text-sm lg:text-base text-gray-600">{item.content}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={'container py-24'}>
        <section className="flex flex-wrap overflow-hidden">
          <article className="my-4 px-8 lg:px-12 w-full overflow-hidden lg:w-1/2 flex flex-col justify-center">
            <div className="py-10">
              <h2 className="text-3xl leading-snug lg:text-4xl lg:leading-snug font-light">
                <b>50가지 유전항목 분석</b>으로 <br />
                자신의 취약한 <b>영양소</b>를<br /> 미리 보충하세요.
              </h2>
              <div>
                <p className="inline-block mt-6 p-3 bg-primary-100">
                  유전자 검사 결과는 질병의 진단 및 치료의 목적으로 사용될 수 없으며, 질병 및 암 관련 유전자 결과는
                  제공하지 않습니다.
                </p>
              </div>
            </div>
          </article>
          <article className="lg:my-4 px-8 lg:px-12 w-full overflow-hidden lg:w-1/2">
            <ul>
              {dtcCategories.map((item, index) => (
                <li key={index} className="py-4 px-4 text-center">
                  <div className="flex text-left">
                    <span className="relative w-20 flex-shrink-0">
                      <Img width={56} height={56} src={`/images/${item.icon}.svg`} alt="icon" />
                    </span>
                    <div>
                      <h4 className="text-lg">
                        {item.title}({item.qtt})
                      </h4>
                      <p className="text-gray-500 text-sm mt-1">{item.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>

      <section className="rounded-large bg-gray-100 px-8 py-24 relative">
        <div className="container">
          <h2 className="text-3xl text-center leading-normal pb-10">유전자 키트 사용 설명</h2>
          <article className="max-w-xl mx-auto">
            <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dp7VTLhjHHE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </article>
        </div>
      </section>
    </ContainerFluid>
  )
}
