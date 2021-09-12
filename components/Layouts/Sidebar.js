import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Navs, { navs } from './navs'

export const getStaticProps = async () => {
  return {
    props: {
      subpages: navs.subpages,
    },
  }
}

export default function Sidebar({ subpages }) {
  // console.log(data)
  const navItems = [
    {
      path: '/dtc',
      title: '유전자 검사',
    },
    {
      path: '/survey',
      title: '건강 설문',
    },
    {
      path: '/news',
      title: '비타 소식',
    },
    {
      path: '/support',
      title: '고객 센터',
    },
    {
      path: '/mypage',
      title: 'MY비타',
    },
  ]

  const sidebarStyles = styled.div`
    #sidebar {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: calc(100vh - 110px);
        @apply bg-gray-200;
      }
    }
  `

  return (
    <aside id="sidebar" class="flex-shrink-0 w-52 p-4 py-16 my-0 text-center ">
      <nav>
        <h3 class="text-xl font-bold">pageTitle</h3>
        <ul class="mt-6">
          <>
            {navItems.map((nav) => (
              <li class="py-3" key={nav.id}>
                <Link className={'nav'} href={nav.path}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </>
        </ul>
      </nav>
    </aside>
  )
}
