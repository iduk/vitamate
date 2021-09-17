import Sidebar from './Sidebar'

export default function LayoutSidebar({ children }) {
  return (
    <section className={'container mx-auto max-w-5xl flex flex-initial'}>
      <Sidebar />
      <div className="w-full px-16 py-16">
        <h1 className="page-title sidebar">페이지 타이틀</h1>
        {children}
      </div>
    </section>
  )
}
