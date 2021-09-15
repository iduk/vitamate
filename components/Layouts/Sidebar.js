import Link from 'next/link'

export default function Sidebar() {
  const news = [
    {
      path: '/news',
      title: '비타 뉴스',
    },
    {
      path: '/news/whitepaper',
      title: '비타 백서',
    },
  ]
  const mypage = [
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
    {
      path: '/mypage/point',
      title: '포인트',
    },
    {
      path: '/mypage/pointshop',
      title: '포인트샵',
    },
  ]

  return (
    <aside id="sidebar" className="flex-shrink-0 w-52 p-4 py-16 my-0 text-center">
      <nav id="mypage">
        <h3 className="text-xl font-bold">현재페이지 타이틀</h3>
        <ul className="mt-6">
          {news.map((nav) => (
            <li className="py-3" key={nav.id}>
              <Link className={'nav'} href={nav.path}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
