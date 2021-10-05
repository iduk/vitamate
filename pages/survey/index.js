import ContainerFluid from 'components/Layouts/ContainerFluid'
import Img from 'next/image'

export default function Survey() {
  return (
    <ContainerFluid>
      <div className={'container px-6 py-12 lg:px-0 lg:py-24'}>
        <section class="flex flex-wrap -mx-12 overflow-hidden">
          <article class="my-4 px-12 w-full overflow-hidden lg:w-1/2">
            <div className="w-auto h-96 relative">
              <Img
                className="rounded-large shadow"
                layout="fill"
                objectFit="cover"
                src="/images/survey-content-img1.png"
              />
            </div>
          </article>

          <article class="my-4 px-4 w-full overflow-hidden lg:w-1/2 flex flex-col justify-center">
            <div className="py-10 lg:px-8">
              <h2 className="text-3xl leading-normal font-light">
                건강 전문가들과 함께 설계한
                <br />
                <b>건강 설문</b>
              </h2>
            </div>
          </article>
        </section>
      </div>

      <div className={'bg-gray-100 py-24'}>
        <section class="container flex flex-wrap -mx-12 overflow-hidden ">
          <article class="my-4 px-4 w-full overflow-hidden lg:w-1/2 flex flex-col justify-center">
            <div className="py-10 lg:px-8">
              <h2 className="text-3xl leading-normal font-light">
                <b>비타메이트 건강 설문</b> 내용은 의학, 약학, 영양학 등 각 분야 <b>전문가의 자문</b>을 통해 만들어
                졌습니다.
              </h2>
            </div>
          </article>
          <article class="my-4 px-12 w-full overflow-hidden lg:w-1/2">
            <div className="w-auto h-96 relative">
              <Img
                className="rounded-large shadow"
                layout="fill"
                objectFit="cover"
                src="/images/survey-content-img2.png"
              />
            </div>
          </article>
        </section>
      </div>
    </ContainerFluid>
  )
}
