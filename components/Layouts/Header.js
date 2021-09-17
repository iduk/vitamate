import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Img from 'next/image'
import s from './Header.module.scss'
import Modal from 'components/Modal'
import SignUp from 'pages/SignUp'
import SignIn from 'pages/SignIn'

export default function Header() {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(false)
  const [showSignin, setShowSignin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

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
    <div className={s.wrapper}>
      <header
        id="header"
        className={'relative z-10 flex flex-wrap items-center justify-between border-b border-opacity-10 border-black'}
      >
        <div className={'container max-w-5xl mx-auto'}>
          <ul className={'flex flex-wrap items-center justify-end h-full'} style={{ height: '40px' }}>
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
                  <Link href="/mypage" activeClassName="active">
                    <a className={'block p-2 text-sm hover:text-primary'}>MY비타</a>
                  </Link>
                </li>
                <li>
                  <span className={'block text-sm'}>・</span>
                </li>
                <li>
                  <Link href=".">
                    <a onClick={() => setIsLoggin(true)} className={'block p-2 text-sm hover:text-primary'}>
                      로그아웃
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>

          <nav className="navbar flex flex-wrap items-center justify-between">
            <div className="flex w-auto static justify-start items-center">
              <Link href="/">
                <a className="brand-logo pb-1">
                  <Img src="/images/logo.svg" width="162" height="30" alt="vitamate logo" />
                </a>
              </Link>
            </div>
            <div className="flex flex-grow items-center">
              <ul className="flex flex-row list-none ml-auto">
                {navs.pages.map((nav) => (
                  <li key={nav.path} className={s.navItem}>
                    <Link href={nav.path}>
                      <a className={nav.path === router.pathname ? s.navLink + ' ' + s.active : s.navLink}>
                        {nav.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <Modal title={'로그인'} onClose={() => setShowSignin(false)} show={showSignin}>
        <SignIn />
      </Modal>

      <Modal title={'회원가입'} onClose={() => setShowSignup(false)} show={showSignup}>
        <SignUp />
      </Modal>
    </div>
  )
}
