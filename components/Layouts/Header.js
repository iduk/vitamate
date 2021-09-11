import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

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
      title: '유전자검사',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      path: '/posts',
      title: '건강설문',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      path: '/contact',
      title: 'Contact',
    },
  ]

  return (
    <div>
      <header
        id="header"
        className={'relative z-10 flex flex-wrap items-center justify-between border-b border-opacity-10 border-black'}
      >
        <div className={'container mx-auto'}>
          <ul className={'navbar flex flex-wrap items-center justify-end h-full'}>
            <li>
              <Link href="/login" activeClassName="active">
                <a className={'block p-2 text-sm'}>로그인</a>
              </Link>
            </li>
            <li>
              <span className={'block text-sm'}>・</span>
            </li>
            <li>
              <Link href="/login" activeClassName="active">
                <a className={'block p-2 text-sm'}>회원가입</a>
              </Link>
            </li>
          </ul>
          <nav className={'navbar flex flex-wrap items-center justify-between'}>
            <div className={'flex w-auto static justify-start items-center'}>
              <Link href="/">
                <a className={cx('brand-logo')}>
                  <img src={'/images/logo.svg'} alt="vitamate logo" />
                </a>
              </Link>
            </div>
            <div className="flex flex-grow items-center">
              <ul className="flex flex-row list-none ml-auto">
                {navItems.map((nav) => (
                  <li key={nav.id} className="nav-item">
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
