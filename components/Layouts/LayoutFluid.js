export default function LayoutFluid({ children }) {
  return (
    <section className={'container mx-auto max-w-5xl py-16'}>
      <h1 className="page-title">페이지 타이틀</h1>
      {children}
    </section>
  )
}
