import Sidebar from './Sidebar'

export default function ContainerAside({ children }) {
  return (
    <section className={'container flex flex-initial'}>
      <Sidebar />

      <div className={'container py-12 px-6 lg:p-16'}>
        {/* <h1 className="page-title">페이지 타이틀</h1> */}
        {children}
      </div>
    </section>
  )
}
