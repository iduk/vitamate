export const navs = [
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
      { path: '/news', title: '비타 뉴스' },
      { path: '/whitepaper', title: '비타 백서' },
    ],
  },
  {
    title: '고객 센터',
    path: '/support',
    subpages: [
      { path: '/support/faq', title: 'FAQ' },
      { path: '/support/contact', title: '1:1문의' },
    ],
  },
  {
    title: 'MY비타',
    path: '/mypage',
    subpages: [
      { path: '/subscribe', title: '구독 관리' },
      { path: '/user', title: '내 정보' },
      { path: '/addressbook', title: '배송지 관리' },
      { path: '/calendar', title: '비타 캘린더' },
      { path: '/sale', title: '할인 현황' },
      { path: '/pointshop', title: '포인트샵' },
    ],
  },
]
