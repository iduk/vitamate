import Sidebar from './Sidebar'

export default function ContainerAside({ children }) {
  return (
    <section className={'container-view flex flex-initial'}>
      <Sidebar />

      <div className="w-full px-16 py-16">
        <h1 className="page-title">페이지 타이틀</h1>
        {children}
      </div>
    </section>
  )
}
