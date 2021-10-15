import ContainerFluid from 'components/Layouts/ContainerFluid'
import Img from 'next/image'

export default function Survey() {
  return (
    <ContainerFluid>
      <div className={'container px-8 lg:px-0 py-24'}>
        <section className="flex flex-wrap justify-center items-center overflow-hidden">
          <article className="mt-10 lg:my-4 w-full overflow-hidden lg:w-1/2 order-2 lg:order-1">
            <div className="relative" style={{ zIndex: -1 }}>
              <Img className="rounded-large shadow" width={500} height={350} src="/images/survey-content-img1.png" />
            </div>
          </article>

          <article className="lg:my-4 w-full overflow-hidden lg:w-1/2 order-1 lg:order-2">
            <div className="lg:py-10 lg:px-8">
              <h2 className="text-3xl leading-normal lg:text-4xl lg:leading-normal font-light">
                건강 전문가들과 함께 설계한
                <br /> <b>건강 설문</b>
              </h2>
              <p className="text-base lg:text-lg mt-4">
                건강설문 내용은 의학, 약학, 영양학 등 각 분야 전문가의 자문을 통해 만들어졌습니다.
              </p>
            </div>
          </article>
        </section>
      </div>
    </ContainerFluid>
  )
}
