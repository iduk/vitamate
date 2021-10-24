import ContainerFluid from 'components/Layouts/ContainerFluid'
import { useState } from 'react'
import Link from 'next/link'
import Terms from './terms'
import Privacy from './privacy'
import Marketing from './marketing'

function Agree() {
  const serviceTab = [
    {
      id: 0,
      href: '/agree/terms',
      title: '이용약관',
    },
    {
      id: 1,
      href: '/agree/privacy',
      title: '개인정보취급방침',
    },
    {
      id: 2,
      href: '/agree/marketing',
      title: '마케팅수신동의',
    },
  ]

  return (
    <ContainerFluid>
      <div className={'container py-12 px-6 lg:px-0 lg:py-16 overflow-hidden'}>
        <div className="overflow-hidden" style={{ width: 'calc(100vw - 48px)' }}>
          <ul className="border-b border-gray-300 flex flex-nowrap lg:justify-start w-full overflow-y-hidden overflow-x-auto scrollbar-none">
            {serviceTab.map((tab, id) => (
              <li key={tab.id} className="mr-10 relative">
                <Link href="#">
                  <a
                    className={`${
                      tab.id === 0 ? 'font-bold border-b-4 border-primary-600' : null
                    } block py-4 text-lg lg:text-2xl font-light`}
                  >
                    {tab.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="container">
          {serviceTab.id === 0 ? '' : <Terms />}
          {serviceTab.id === 1 ? '' : <Privacy />}
          {serviceTab.id === 2 ? '' : <Marketing />}
        </div>
      </div>
    </ContainerFluid>
  )
}

export default Agree
