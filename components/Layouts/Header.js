import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import s from './Header.module.scss'
import img from 'next/image'
import navs from './navs'

export default function Header({ Navs }) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={s.wrapper}>
      <header
        id="header"
        className={'relative z-10 flex flex-wrap items-center justify-between border-b border-opacity-10 border-black'}
      >
        <div className={'container max-w-5xl mx-auto'}>
          <ul className={'flex flex-wrap items-center justify-end h-full'} style={{ height: '40px' }}>
            {/* Logout */}
            <li>
              <Link href="/SignIn">
                <a className={'block p-2 text-sm focus:text-primary'}>로그인</a>
              </Link>
            </li>
            <li>
              <span className={'block text-sm'}>・</span>
            </li>
            <li>
              <Link href="/SignUp">
                <a className={'block p-2 text-sm focus:text-primary'}>회원가입</a>
              </Link>
            </li>
            {/* Login */}
            {/* <li>
              <Link href="/login" activeClassName="active">
                <a className={'block p-2 text-sm'}>아임비타</a>
              </Link>
            </li>
            <li>
              <span className={'block text-sm'}>・</span>
            </li>
            <li>
              <Link href="/login" activeClassName="active">
                <a className={'block p-2 text-sm'}>로그아웃</a>
              </Link>
            </li> */}
          </ul>
          <nav className="navbar flex flex-wrap items-center justify-between">
            <div className="flex w-auto static justify-start items-center">
              <Link href="/">
                <a className="brand-logo pb-1">
                  <img src={'/images/logo.svg'} alt="vitamate logo" />
                </a>
              </Link>
            </div>
            <div className="flex flex-grow items-center">
              <ul className="flex flex-row list-none ml-auto">
                {navs.pages.map((nav) => (
                  <li key={nav.id} className={s.navItem}>
                    <Link href={nav.path}>
                      <a className={nav.path === router.pathname ? s.navLink + ' ' + s.active : s.navLink}>
                        {nav.title}
                      </a>
                    </Link>
                  </li>
                ))}
                <style jsx>{`
                  .nav-link.active::after {
                    content: ' (current page)';
                  }
                `}</style>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
