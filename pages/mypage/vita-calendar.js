import Calendar from 'components/Calendar'
import ContainerAside from 'components/Layouts/ContainerAside'

export default function VitaCalendar() {
  return (
    <ContainerAside>
      <h1 className="page-title _sub">포인트</h1>

      <section>
        <Calendar />
      </section>
    </ContainerAside>
  )
}
