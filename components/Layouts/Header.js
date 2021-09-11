import React from 'react'
import Link from 'next/link'

import s from './Header.module.scss'

export default function Header() {
  const styles = {
    className: 'px-4 py-5 flex items-center hover:text-primary',
    activeClassName: 'active',
  }
  const navItems = [
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      path: '/',
      title: '유전자 검사',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      path: '/survey',
      title: '건강 설문',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      path: '/news',
      title: '비타 소식',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      path: '/support',
      title: '고객 센터',
    },
  ]

  return (
    <div className={s.wrapper}>
      <header
        id="header"
        className={'relative z-10 flex flex-wrap items-center justify-between border-b border-opacity-10 border-black'}
      >
        <div className={'container max-w-5xl mx-auto'}>
          <ul className={'navbar flex flex-wrap items-center justify-end h-full'}>
            {/* Logout */}
            <li>
              <Link href="/login" activeClassName="active">
                <a className={'block p-2 text-sm'}>회원가입</a>
              </Link>
            </li>
            <li>
              <span className={'block text-sm'}>・</span>
            </li>
            <li>
              <Link href="/login" activeClassName="active">
                <a className={'block p-2 text-sm'}>로그인</a>
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
                <a className="brand-logo">
                  <img src={'/images/logo.svg'} alt="vitamate logo" />
                </a>
              </Link>
            </div>
            <div className="flex flex-grow items-center">
              <ul className="flex flex-row list-none ml-auto">
                {navItems.map((nav) => (
                  <li key={nav.id} className={'nav-item'}>
                    <Link href={nav.path} activeClassName={nav.activeClassName}>
                      <a className={nav.className}>{nav.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
