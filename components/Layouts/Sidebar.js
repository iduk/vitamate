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
        <nav className="lg:hidden container overflow-hidden">
          <ul className="flex flex-shrink-0">
            {news.nav.map((nav) => (
              <li key={nav.path}>
                <Link href={nav.path} as={nav.path}>
                  <a
                    className={`${
                      nav.path === router.pathname ? 'bg-primary-100 font-extrabold' : null
                    } block p-6 text-xl`}
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
        <nav className="lg:hidden container overflow-hidden">
          <ul className="flex flex-shrink-0">
            {support.nav.map((nav) => (
              <li key={nav.path}>
                <Link href={nav.path} as={nav.path}>
                  <a
                    className={`${
                      nav.path === router.pathname ? 'bg-primary-100 font-extrabold' : null
                    } block p-6 text-xl`}
                  >
                    {nav.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {/* UI 다름 */}
      {asPath.indexOf('mypage') === 1 ? (
        <nav className="lg:hidden container overflow-hidden">
          <ul className="flex flex-shrink-0 flex-wrap">
            {mypage.nav.map((nav) => (
              <li key={nav.path}>
                <Link href={nav.path} as={nav.path}>
                  <a
                    className={`${
                      nav.path === router.pathname ? 'bg-primary-100 font-extrabold' : null
                    } block p-6 text-xl`}
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
