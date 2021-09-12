export default function LayoutFluid({ children }) {
  return (
    <section className={'container mx-auto max-w-5xl py-16'}>
      <h1 className="text-3xl">여긴어디..</h1>
      {children}
    </section>
  )
}
