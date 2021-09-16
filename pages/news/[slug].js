import { useRouter } from 'next/router'

const SlugPage = () => {
  const { asPath } = useRouter()
  return (
    <>
      <p>Hello, I'm the {asPath} page</p>
    </>
  )
}

export default SlugPage
