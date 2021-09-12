import Sidebar from './Sidebar'

export default function LayoutSidebar({ children }) {
  return (
    <section className={'container mx-auto max-w-5xl flex flex-initial'}>
      <Sidebar />
      <div class="w-full px-16 py-16">
        <h1 className=" text-4xl font-bold pb-12">사이드바 레이아웃</h1>
        {children}
      </div>
    </section>
  )
}
