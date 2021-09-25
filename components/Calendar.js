import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../styles/calendar.scss'

const Calendar = () => (
  <Layout>
    <FullCalendar plugins={[dayGridPlugin]} initialEvents={[{ title: 'initial event', start: new Date() }]} />
  </Layout>
)

export default Calendar
