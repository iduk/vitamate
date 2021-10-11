import ContainerFluid from 'components/Layouts/ContainerFluid'
import Img from 'next/image'

export default function Survey() {
  return (
    <ContainerFluid>
      <div className={'container px-6 py-12 lg:px-0 lg:py-24'}>
        <section className="flex flex-wrap -mx-12 overflow-hidden">
          <article className="my-4 px-12 w-full overflow-hidden lg:w-1/2">
            <div className="w-auto h-96 relative">
              <Img
                className="rounded-large shadow"
                layout="fill"
                objectFit="cover"
                src="/images/survey-content-img1.png"
              />
            </div>
          </article>

          <article className="my-4 px-4 w-full overflow-hidden lg:w-1/2 flex flex-col justify-center">
            <div className="py-10 lg:px-8">
              <h2 className="text-4xl leading-snug font-normal mb-5">
                건강 전문가들과 함께 설계한
                <br />
                <b>건강 설문</b>
              </h2>
              <p className="text-base lg:text-lg">
                건강설문 내용은 의학, 약학, 영양학 등 각 분야 전문가의 자문을 통해 만들어졌습니다.
              </p>
            </div>
          </article>
        </section>
      </div>
    </ContainerFluid>
  )
}
