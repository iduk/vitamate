import ContainerFluid from 'components/Layouts/ContainerFluid'
import { useState } from 'react'
import Link from 'next/link'
import TermsOfService from './TermsOfService'
import PrivacyPolicy from './PrivacyPolicy'
import MarketingAgree from './MarketingAgree'

export default function Agreement() {
  const [agree, setAgree] = useState(false)

  const serviceTab = [
    {
      id: 0,
      path: '/TermsOfService',
      title: '이용약관',
    },
    {
      id: 1,
      path: '/PrivacyPolicy',
      title: '개인정보취급방침',
    },
    {
      id: 2,
      path: '/MarketingAgree',
      title: '마케팅수신동의',
    },
  ]

  return (
    <ContainerFluid>
      <div className={'container py-12 px-6 lg:px-0 lg:py-16 overflow-hidden'}>
        <div className="overflow-hidden" style={{ width: 'calc(100vw - 48px)' }}>
          <ul className=" flex flex-nowrap lg:justify-start w-full overflow-y-hidden overflow-x-auto scrollbar-none">
            {serviceTab.map((tab) => (
              <li key={tab.id} className="mr-10 relative">
                <Link href=".">
                  <a
                    href={tab.path}
                    className={`${
                      tab.id === 0 ? 'font-extrabold border-b-4 border-primary-600' : null
                    } block py-4 text-lg lg:text-2xl font-light`}
                  >
                    {tab.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <TermsOfService />
      </div>
    </ContainerFluid>
  )
}
