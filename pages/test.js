import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Tabs = ({ router }) => {
  const {
    query: { tab },
  } = router

  const isTabOne = tab === '1' || tab == null
  const isTabTwo = tab === '2'

  return (
    <div>
      <div selected={isTabOne}>
        <Link href={{ pathname: '/mypage/subscribe', query: { tab: '1' } }}>
          <a>Tab 1</a>
        </Link>
      </div>
      <div selected={isTabTwo}>
        <Link href={{ pathname: '/mypage/unsubscribe', query: { tab: '2' } }}>
          <a>Tab 2</a>
        </Link>
      </div>

      <section className="mt-10">
        {isTabOne && <React.Fragment>This is tab one content</React.Fragment>}
        {isTabTwo && <React.Fragment>This is tab two content</React.Fragment>}
      </section>
    </div>
  )
}

export default withRouter(Tabs)
