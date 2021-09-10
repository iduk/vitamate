import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './index.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default function TopNav() {
  return (
    <div className="w-full">
      <header
        id="header"
        className="relative z-10 flex flex-wrap items-center justify-between border-b border-opacity-10 border-black"
      >
        <div className="container mx-auto">
          <ul className="topnav flex flex-wrap items-center justify-end h-full">
            <li>
              <Link className="block p-2 text-sm" href="/login" active-class="active">
                로그인
              </Link>
            </li>
            <li>
              <span className="block text-sm">・</span>
            </li>
            <li>
              <Link className="block p-2 text-sm" href="/signup" active-class="active">
                회원가입
              </Link>
            </li>
          </ul>
          <nav className="navbar flex flex-wrap items-center justify-between">
            <div className="flex w-auto static justify-start items-center">
              <Link className={cx('logo', 'inline-block')} href="/">
                <Image src="/images/logo.svg" alt="brand" width={200} height={80} />
              </Link>
            </div>
            <div className="flex flex-grow items-center">
              <ul className="flex flex-row list-none ml-auto">
                <li className="nav-item">
                  <Link href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
