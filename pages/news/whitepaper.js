import ContainerAside from 'components/Layouts/ContainerAside'
import Img from 'next/image'

export default function Whitepaper() {
  const ItemList = [
    {
      thumbImage:
        'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      title: '간, 구체적으로 무슨 일을 하나요?',
      content:
        '간은 우리 몸에서 에너지 관리 센터 역할을 도맡아 하고 있다. 즉 간은 장에서 흡수된 영양소를 저장하거나 다른 필요한 물질로 가공해 온몸의 세포로 분배한다는 뜻이다. 간은 우리 몸에서 에너지 관리 센터 역할을 도맡아 하고 있다. 즉 간은 장에서 흡수된 영양소를 저장하거나 다른 필요한 물질로 가공해 온몸의 세포로 분배한다는 뜻이다.',
    },
    {
      thumbImage:
        'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      title: '비타민, 바르게 알고 먹자!',
      content:
        '결핍 증상 및 복용시 기대효과, 일반적으로 사람들이 건강을 유지하고 영양의 균형을 위해 가장 많이 섭취하는 영양제는 비타민과 미네랄입니다. 이 비타민과 미네랄을 미량 영양소라고 하는데 음식물 섭취로 체내에 영양을 공급하고 건강을 유지하는데 도움이 되는 영양소입니다.',
    },
  ]

  return (
    <ContainerAside>
      <h1 className="page-title _sub">비타 백서</h1>
      <ul>
        {ItemList.map((item, id) => (
          <li key={id} className="w-full block lg:flex lg:items-stretch lg:justify-between py-6">
            <div className="flex-shrink-0 mr-0 mb-5 lg:mr-7 lg:mb-0">
              <div className="thumb-image" style={{ backgroundImage: 'url(' + `${item.thumbImage}` + ')' }}></div>
            </div>

            <dl className="py-0 lg:py-3">
              <dt className="text-lg font-bold mb-3">{item.title}</dt>
              <dd>
                <p className="text-gray-400 text-sm ellipsis-content">{item.content}</p>
              </dd>
              <dd className="mt-5 flex justify-end lg:justify-start">
                <button className="rounded py-3 pl-4 pr-5 bg-primary-600 text-white hover:bg-primary-700 flex items-center">
                  <Img src={'/images/ic-download.svg'} width="20px" height="20px" alt="download" />
                  <span className="inline-flex ml-1">다운로드</span>
                </button>
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </ContainerAside>
  )
}
