import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'

const news = {
  title: '비타 소식',
  nav: [
    {
      path: '/news',
      title: '비타 뉴스',
    },
    {
      path: '/news/press',
      title: '언론 보도',
    },
  ],
}
const support = {
  title: '고객 센터',
  nav: [
    {
      path: '/support',
      title: 'FAQ',
    },
    {
      path: '/support/contact',
      title: '1:1문의',
    },
  ],
}

const mypage = {
  title: 'MY비타',
  nav: [
    {
      path: '/mypage',
      title: '내 정보',
    },
    {
      path: '/mypage/subscribe',
      title: '구독 관리',
    },
    {
      path: '/mypage/payment',
      title: '결제 관리',
    },
    {
      path: '/mypage/addressbook',
      title: '배송지 관리',
    },
    {
      path: '/mypage/vita-calendar',
      title: '비타 캘린더',
    },
    {
      path: '/mypage/point',
      title: '포인트',
    },
    {
      path: '/mypage/delete-account',
      title: '회원 탈퇴',
    },
  ],
}

function Sidebar({ children, router }) {
  const { asPath } = useRouter()
  return (
    <>
      <aside className="hidden lg:table sidebar flex-shrink-0 py-16 my-0 text-center">
        <nav>
          {asPath.indexOf('news') === 1 && (
            <>
              <h3 className="text-xl font-bold">{news.title}</h3>
              <ul className="mt-6">
                {news.nav.map((nav) => (
                  <li className="py-3" key={nav.path}>
                    <Link href={nav.path} as={nav.path}>
                      <a className={('nav', nav.path === router.pathname ? 'text-primary-600' : '')}>{nav.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {asPath.indexOf('support') === 1 && (
            <>
              <h3 className="text-xl font-bold">{support.title}</h3>
              <ul className="mt-6">
                {support.nav.map((nav) => (
                  <li className="py-3" key={nav.path}>
                    <Link href={nav.path} as={nav.path}>
                      <a className={('nav', nav.path === router.pathname ? 'text-primary-600' : '')}>{nav.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {asPath.indexOf('mypage') === 1 && (
            <>
              <h3 className="text-xl font-bold">{mypage.title}</h3>
              <ul className="mt-6">
                {mypage.nav.map((nav) => (
                  <li className="py-3" key={nav.path}>
                    <Link href={nav.path} as={nav.path}>
                      <a className={('nav', nav.path === router.pathname ? 'text-primary-600' : '')}>{nav.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>
      </aside>

      {/* mobile */}
      {asPath.indexOf('news') === 1 ? (
        <nav className="lg:hidden container overflow-hidden mt-6">
          <ul className="flex flex-shrink-0 border-b border-gray-200 px-4">
            {news.nav.map((nav) => (
              <li key={nav.path} className="mx-3 relative">
                <Link href={nav.path} as={nav.path}>
                  <a
                    className={`${
                      nav.path === router.pathname ? 'font-extrabold border-b-2 border-primary-600' : null
                    } block px-1 py-4 text-xl font-normal -mb-px`}
                  >
                    {nav.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {asPath.indexOf('support') === 1 ? (
        <nav className="lg:hidden container overflow-hidden mt-6">
          <ul className="flex flex-shrink-0 border-b border-gray-200 px-4">
            {support.nav.map((nav) => (
              <li key={nav.path} className="mx-3 relative">
                <Link href={nav.path} as={nav.path}>
                  <a
                    className={`${
                      nav.path === router.pathname ? 'font-extrabold border-b-2 border-primary-600' : null
                    } block px-1 py-4 text-xl font-normal -mb-px`}
                  >
                    {nav.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {/*
       Mypage 모바일에서 'mypage/index' 제외
      */}
      {asPath.indexOf('mypage') === 1 ? (
        <nav className="lg:hidden container overflow-x-hidden mt-6 w-screen">
          <ul className="flex flex-nowrap border-b border-gray-200 px-4 w-full overflow-x-auto">
            {mypage.nav.map((nav) => (
              <li key={nav.path} className="mx-3 relative">
                <Link href={nav.path} as={nav.path}>
                  <a
                    className={`${
                      nav.path === router.pathname ? 'font-extrabold border-b-2 border-primary-600' : null
                    } block px-1 py-4 text-xl font-normal whitespace-nowrap`}
                  >
                    {nav.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  )
}
export default withRouter(Sidebar)
