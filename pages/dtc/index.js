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
  { icon: 'ic-nutrient', title: '영양소', qtt: 24 },
  { icon: 'ic-skin', title: '피부/모발', qtt: 24 },
  { icon: 'ic-exercise', title: '운동특성', qtt: 24 },
  { icon: 'ic-eating', title: '식습관', qtt: 24 },
  { icon: 'ic-nicotine', title: '카페인/알코올/니코틴 반응', qtt: 24 },
  { icon: 'ic-healthcare', title: '건강관리', qtt: 24 },
]

export default function Dtc() {
  return (
    <ContainerFluid>
      <div className={'container px-6 py-12 lg:px-0 lg:py-24'}>
        <section className="flex flex-wrap -mx-12 overflow-hidden">
          <article className="my-4 px-12 w-full overflow-hidden lg:w-1/2">
            <div className="w-auto h-96 relative">
              <Img
                className=" rounded-large shadow"
                layout="fill"
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </div>
          </article>

          <article className="my-4 px-4 w-full overflow-hidden lg:w-1/2">
            <div className="py-10 lg:px-8">
              <h2 className="text-3xl leading-normal font-light">
                비타메이트는 <b>마크로젠과 제휴</b>하여 변하지 않는 <b>고객의 유전 정보 분석</b>을 통해{' '}
                <b>맞춤 영양소</b>를 찾고 있습니다.
              </h2>
              <ul className="product-list text-lg leading-10 pt-8">
                <li>
                  <span className={'mr-3'}>
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  글로벌 최정상 수준급 유전체 분석 인프라 보유
                </li>
                <li>
                  <span className={'mr-3'}>
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  현존하는 가장 정밀한 아시아인 표준 게놈 지도 구축
                </li>
                <li>
                  <span className={'mr-3'}>
                    <Img src="/images/check-mark.svg" width={12} height={12} alt="icon" />
                  </span>
                  믿을 수 있는 데이터 관리 체계
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>

      <section className="rounded-large bg-gray-100 px-8 py-24 relative">
        <div className="container">
          <h2 className="text-3xl text-center leading-normal pb-10">유전자 검사 순서</h2>
          <ul className="proccess-list flex justify-between">
            {dtcProccess.map((item, index) => (
              <li key={index} className="text-center p-2 w-1/6">
                <h3
                  className={`z-10 w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300 grid place-content-center text-lg mx-auto ${
                    index === 5 && 'border-primary-600 bg-primary-600 text-white'
                  } `}
                >
                  {index + 1}
                </h3>
                <dl className={`${index === 5 && 'text-primary-600'} mt-5`}>
                  <dt className="font-bold text-xl mb-2">{item.title}</dt>
                  <dd>{item.content}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={'container px-6 py-24 lg:px-0'}>
        <section className="flex flex-wrap -mx-12 overflow-hidden">
          <article className="my-4 px-12 w-full overflow-hidden lg:w-1/2 flex flex-col justify-center">
            <div className="py-10">
              <h2 className="text-3xl leading-normal font-light">
                <b>50가지 유전항목 분석</b>으로 <br />
                자신의 취약한 <b>영양소</b>를<br /> 미리 보충하세요.
              </h2>
              <p className="mt-6 text-gray-400">
                유전자 검사 결과는 질병의 진단 및 치료의 목적으로 사용될 수 없으며, 질병 및 암 관련 유전자 결과는
                제공하지 않습니다.
              </p>
            </div>
          </article>
          <article className="my-4 px-12 w-full overflow-hidden lg:w-1/2">
            <ul className="grid grid-cols-3 grid-rows-2 gap-6">
              {dtcCategories.map((item, index) => (
                <li key={index} className="rounded-large py-5 px-4 text-center bg-primary-100">
                  <div className="relative mb-4">
                    <Img width={60} height={60} src={`/images/${item.icon}.svg`} alt="icon" />
                  </div>
                  <h4>
                    {item.title}({item.qtt})
                  </h4>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>

      <section className="rounded-large bg-gray-100 px-8 py-24 relative">
        <div className="container">
          <h2 className="text-3xl text-center leading-normal pb-10">유전자 검사 영상</h2>
          <article className="max-w-xl mx-auto">
            <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
              {/* <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/zihoyz0u_cs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}

              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dp7VTLhjHHE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </article>
        </div>
      </section>
    </ContainerFluid>
  )
}
