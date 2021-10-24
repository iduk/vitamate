import ContainerFluid from 'components/Layouts/ContainerFluid'
import Img from 'next/image'

export default function Teck() {
  return (
    <ContainerFluid>
      <div className={'container px-8 lg:px-0 py-24'}>
        <section className="flex flex-wrap justify-center items-center overflow-hidden">
          <article className="mt-10 lg:my-4 w-full overflow-hidden lg:w-1/2 order-2 lg:order-1">
            <div className="relative" style={{ zIndex: -1 }}>
              <Img className="" width={550} height={450} objectFit="contain" src="/images/vita-teck-image1.png" />
            </div>
          </article>

          <article className="lg:my-4 w-full overflow-hidden lg:w-1/2 order-1 lg:order-2">
            <div className="lg:py-10 lg:px-8">
              <h2 className="text-3xl leading-snug lg:text-4xl lg:leading-snug font-light">
                비타메이트 서비스를 위해 <br className="hidden lg:block" />
                <b>개인의 Vital Balance</b>를 이루는 <b>디지털 전환</b>을 추구하고 있습니다
              </h2>
              <p className="text-base lg:text-lg mt-4">
                MAX ( AI 알고리즘 )를 축으로 고객이 MAX와 소통하고 MAX 의 추천 영양제를 섭취해 개인의 Vital Balance를
                관리합니다.
              </p>
            </div>
          </article>
        </section>
      </div>

      <div className={'px-8 lg:px-0 py-16 bg-gray-50'}>
        <section className="container flex flex-wrap justify-center items-center overflow-hidden">
          <article className="lg:my-4 w-full overflow-hidden lg:w-1/2 order-1 lg:order-1">
            <div className="lg:py-10 lg:px-8">
              <h2 className="text-3xl leading-snug lg:text-4xl lg:leading-snug font-light">
                비타메이트 서비스를 위해 <br className="hidden lg:block" />
                <b>개인의 Vital Balance</b>를 이루는 <b>디지털 전환</b>을 추구하고 있습니다
              </h2>
              <p className="text-base lg:text-lg mt-4">
                MAX ( AI 알고리즘 )를 축으로 고객이 MAX와 소통하고 MAX 의 추천 영양제를 섭취해 개인의 Vital Balance를
                관리합니다.
              </p>
            </div>
          </article>

          <article className="mt-10 lg:my-4 w-full overflow-hidden lg:w-1/2 order-2 lg:order-2">
            <div className="relative">
              <Img className="rounded-large shadow" width={500} height={350} src="/images/vita-teck-image2.png" />
            </div>
          </article>
        </section>
      </div>

      <div className={'container px-8 lg:px-0 py-24'}>
        <section className="flex flex-wrap justify-center items-center overflow-hidden">
          <article className="mt-10 lg:my-4 w-full overflow-hidden lg:w-1/2 order-2 lg:order-1">
            <div className="relative" style={{ zIndex: -1 }}>
              <Img className="rounded-large shadow" width={500} height={350} src="/images/vita-teck-image3.png" />
            </div>
          </article>

          <article className="lg:my-4 w-full overflow-hidden lg:w-1/2 order-1 lg:order-2">
            <div className="lg:py-10 lg:px-8">
              <h2 className="text-3xl leading-snug lg:text-4xl lg:leading-snug font-light">
                사람마다 수많은 단기 염기다형이 존재하고 <b>SNP의 차이를 연구, 유전자 진단, 맞춤 약물 개발</b> 등에
                활용하고 있습니다.
              </h2>
              <p className="text-base lg:text-lg mt-4">SNP : Single Nucleotide Polymorphism</p>
            </div>
          </article>
        </section>
      </div>
    </ContainerFluid>
  )
}
