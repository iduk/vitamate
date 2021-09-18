import Sidebar from './Sidebar'

export default function LayoutSidebar({ children }) {
  return (
    <section className={'container-view mx-auto flex flex-initial'}>
      <Sidebar />

      <div className="w-full px-16 py-16">
        <h1 className="page-title">페이지 타이틀</h1>
        {children}
      </div>
    </section>
  )
}
