import React from 'react'

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
              <a className="block p-2 text-sm" href="/login" active-class="active">
                로그인
              </a>
            </li>
            <li>
              <span className="block text-sm">・</span>
            </li>
            <li>
              <a className="block p-2 text-sm" href="/signup" active-class="active">
                회원가입
              </a>
            </li>
          </ul>
          <nav className="navbar flex flex-wrap items-center justify-between">
            <div className="flex w-auto static justify-start items-center">
              <a className="leading-relaxed inline-block pb-2" href="/">
                <img src="/images/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="flex flex-grow items-center">
              <ul className="flex flex-row list-none ml-auto">
                <li className="nav-item">
                  <a href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" active-class="active" className="font-bold px-4 py-5 flex items-center">
                    건강설문
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
