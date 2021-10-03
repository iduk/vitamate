import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import Img from 'next/image'
import SignUp from 'pages/SignUp'
import SignIn from 'pages/SignIn'

export default function Header({ onClose }) {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(false)
  const [showSignin, setShowSignin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      document.body.className = 'scroll-lock'
    } else {
      document.body.className = ''
    }
  }, [active])

  const handleClick = () => {
    setActive(!active)
  }
  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
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
        path: '/mypage/vita-calendar',
        title: '비타 캘린더',
      },
    ],
  }

  return (
    <header className={'layout-header header relative'}>
      <section className={'w-full px-6 lg:px-0 container flex flex-wrap justify-between relative'}>
        <nav className={'hidden lg:block w-full flex-shrink-0 ml-auto mr-0'}>
          <ul className={'top-nav text-gray-600 flex flex-wrap items-center justify-end'}>
            <li>
              <Link href="/products">
                <a className={'block p-3 text-sm hover:text-primary-600'}>영양제 소개</a>
              </Link>
            </li>

            <li>
              <Link href="/mypage">
                <a className={'block px-2 py-3 text-sm hover:text-primary-600'}>MY비타</a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a onClick={() => setShowSignin(true)} className={'block px-2 py-3 text-sm hover:text-primary'}>
                  로그인
                </a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a onClick={() => setShowSignup(true)} className={'block px-2 py-3 text-sm hover:text-primary'}>
                  회원가입
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <article className="relative overflow-hidden w-full block lg:flex lg:justify-between items-center">
          {/* Brand */}
          <div className="flex items-center justify-between w-full py-4 lg:p-0 lg:justify-start lg:w-auto">
            <Link href="/">
              <a className="brand-logo relative">
                <Img src={'/images/logo.svg'} layout="fill" objectFit={'contain'} alt="vitamate logo" />
              </a>
            </Link>
            <button className={'absolute z-30 right-0 lg:hidden ml-auto mr-0 hover:outline-none'} onClick={handleClick}>
              <span className={'toggle-menu ' + (active === true ? 'active' : '')}>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </button>
          </div>

          {/* Nav List */}
          <nav
            className={`${
              active ? 'flex' : 'hidden'
            } w-full h-full bg-white text-black overflow-hidden shadow fixed top-0 left-0 justify-center items-center z-20 lg:relative lg:flex lg:p-0 lg:justify-end lg:w-auto lg:h-auto lg:ml-auto lg:bg-opacity-0 lg:shadow-none lg:border-none`}
          >
            {/* menu */}
            <ul
              style={{ zIndex: 100 }}
              className={'w-full lg:inline-flex lg:flex-grow lg:w-auto lg:rounded-none  lg:text-black'}
            >
              {navs.pages.map((nav) => (
                <li key={nav.path} className={'text-center text-2xl lg:p-0 nav-item'}>
                  <Link href={nav.path}>
                    <a className={nav.path === router.pathname ? 'nav-link active' : 'nav-link'}>{nav.title}</a>
                  </Link>
                </li>
              ))}

              {/* 일단 아무데나 넣자 */}
              <li className={'text-center text-2xl lg:p-0 nav-item lg:hidden'}>
                <Link href="/mypage">
                  <a className={'nav-link'}>MY비타</a>
                </Link>
              </li>
              <li className={'text-center text-2xl lg:p-0 nav-item lg:hidden'}>
                <Link href=".">
                  <a onClick={() => setShowSignin(showSignin)} className={'nav-link'}>
                    로그인
                  </a>
                </Link>
              </li>
              <li className={'text-center text-2xl lg:p-0 nav-item lg:hidden'}>
                <Link href=".">
                  <a onClick={() => setShowSignup(showSignup)} className={'nav-link'}>
                    회원가입
                  </a>
                </Link>
              </li>
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
