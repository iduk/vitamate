import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from 'components/Modal'
import Img from 'next/image'
import SignUp from 'pages/SignUp'
import SignIn from 'pages/SignIn'

export default function Header() {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(false)
  const [showSignin, setShowSignin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const navs = {
    pages: [
      {
        title: '유전자 검사',
        path: '/dtc',
      },
      {
        title: '건강 설문',
        path: '/survey',
      },
      {
        title: '비타 소식',
        path: '/news',
        subpages: [
          {
            path: '/news/',
            title: '비타 뉴스',
          },
          {
            path: '/news/whitepaper',
            title: '비타 백서',
          },
        ],
      },
      {
        title: '고객 센터',
        path: '/support',
        subpages: [
          {
            path: '/support/faq',
            title: 'FAQ',
          },
          {
            path: '/support/contact',
            title: '1:1문의',
          },
        ],
      },
    ],

    mypage: [
      {
        path: '/mypage',
        title: '내 정보',
      },
      {
        path: '/mypage/subscribe',
        title: '구독 관리',
      },
      {
        path: '/mypage/addressbook',
        title: '배송지 관리',
      },
      {
        path: '/mypage/calendar',
        title: '비타 캘린더',
      },
    ],
  }

  return (
    <header className={'layout-header header border-b border-gray-200 relative'}>
      <section className={'w-full px-6 container flex flex-wrap justify-between relative'}>
        <nav className={'hidden lg:block w-full flex-shrink-0 ml-auto mr-0'}>
          <ul className={'flex flex-wrap items-center justify-end'}>
            {/* Logout */}
            {isLoggin === true ? (
              <>
                <li>
                  <Link href=".">
                    <a onClick={() => setShowSignin(true)} className={'block p-2 text-sm focus:text-primary'}>
                      로그인
                    </a>
                  </Link>
                </li>
                <li>
                  <span className={'block text-sm'}>・</span>
                </li>
                <li>
                  <Link href=".">
                    <a onClick={() => setShowSignup(true)} className={'block p-2 text-sm focus:text-primary'}>
                      회원가입
                    </a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/mypage">
                    <a className={'block p-2 text-sm hover:text-primary-600'}>MY비타</a>
                  </Link>
                </li>
                <li>
                  <span className={'block text-sm'}>・</span>
                </li>
                <li>
                  <Link href=".">
                    <a onClick={() => setIsLoggin(true)} className={'block p-2 text-sm hover:text-primary-600'}>
                      로그아웃
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <article className="relative w-full block lg:flex lg:justify-between items-center">
          {/* Brand */}
          <div className="flex items-center justify-between w-full py-4 lg:p-0 lg:justify-start lg:w-auto">
            <Link href="/">
              <a className="brand-logo">
                <Img src={'/images/logo.svg'} width={162} height={30} objectFit={'contain'} alt="vitamate logo" />
              </a>
            </Link>
            <button className={'relative lg:hidden ml-auto mr-0 hover:outline-none'} onClick={handleClick}>
              <span className={'toggle-menu ' + (active === true ? 'active' : null)}>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </button>
          </div>

          <nav className={`${active ? 'flex' : 'hidden'} lg:flex lg:p-0 lg:justify-end lg:w-auto lg:ml-auto`}>
            {/* menu */}
            <ul
              className={
                'w-full lg:inline-flex lg:flex-grow lg:w-auto bg-primary-600 rounded-large lg:rounded-none lg:bg-none'
              }
            >
              {navs.pages.map((nav) => (
                <li key={nav.path} className="p-4 text-white text-center lg:nav-item">
                  <Link href={nav.path}>
                    <a className={nav.path === router.pathname ? 'nav-link active' : 'nav-link'}>{nav.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </section>

      <Modal title={'로그인'} onClose={() => setShowSignin(false)} show={showSignin}>
        <SignIn />
      </Modal>

      <Modal title={'회원가입'} onClose={() => setShowSignup(false)} show={showSignup}>
        <SignUp />
      </Modal>
    </header>
  )
}
