import { useRouter } from 'next/router'
import { NextPageContext } from 'next'

export default function Test() {
  const { push } = useRouter()

  function pushOnlyUrl() {
    push('/mypage?id')
  }

  function pushWithAs() {
    push('/mypage/[id]?', '/mypage/1')
  }

  function shallowPush() {
    push('/?mypage=id', undefined, { shallow: true })
  }

  function notShallowPush() {
    push('/?mypage=1')
  }

  function pushUrl() {
    push('/mypage')
  }

  function pushUrlAndAs() {
    push('/mypage', '/mypage')
  }

  return (
    <>
      <ul>
        <li>
          <button onClick={() => pushOnlyUrl()}>1번. Push only URL</button>
        </li>
        <li>
          <button onClick={() => pushWithAs()}>2번. Push with as</button>
        </li>
        <li>
          <button onClick={() => shallowPush()}>3번. shallow push</button>
        </li>
        <li>
          <button onClick={() => notShallowPush()}>4번. not shallow push</button>
        </li>
        <li>
          <button onClick={() => pushUrl()}>5번. push route</button>
        </li>
        <li>
          <button onClick={() => pushUrlAndAs()}>6번. push route with as</button>
        </li>
      </ul>
    </>
  )
}
