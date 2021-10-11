import ContainerAside from 'components/Layouts/ContainerAside'
import { useState } from 'react'
import Img from 'next/image'
import Link from 'next/link'

export default function Press() {
  const [question, setquestion] = useState(0)
  return (
    <ContainerAside>
      <h1 className="page-title _sub">언론 보도</h1>

      <div className="w-full mx-auto">
        <ul>
          <li className="py-4 border-gray-200 border-solid border-b">
            {/* title */}
            <Link href="https://www.fnnews.com/news/202108261011010605">
              <a target="_blank" className="w-10/12 font-normal">
                <div className="flex items-center cursor-pointer">
                  <span className="w-28 text-sm text-gray-500">2021.08.26</span>
                  <p>비타메이트, 유전자 분석으로 맞춤 영양제 제공 서비스 출시</p>
                </div>
              </a>
            </Link>
          </li>
          <li className="py-4 border-gray-200 border-solid border-b">
            {/* title */}
            <Link href="https://news.mt.co.kr/mtview.php?no=2021082514320068577">
              <a target="_blank" className="w-10/12 font-normal">
                <div className="flex items-center cursor-pointer">
                  <span className="w-28 text-sm text-gray-500">2021.08.25</span>
                  <p>개인 맞춤형 영양제 큐레이션 '비타메이트', 'K-스타트업대상'</p>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </ContainerAside>
  )
}
