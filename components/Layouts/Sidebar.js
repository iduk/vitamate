import Link from 'next/link'
import styled from 'styled-components'
import navs from './navs'

export default function Sidebar() {
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
    <aside id="sidebar" className="flex-shrink-0 w-52 p-4 py-16 my-0 text-center">
      <nav>
        <h3 className="text-xl font-bold">{navs.pages.title}</h3>
        <ul className="mt-6">
          {navs.pages.map((nav) => (
            <li className="py-3" key={nav.id}>
              <Link className={'nav'} href={nav.path}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
