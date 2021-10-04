import ContainerAside from 'components/Layouts/ContainerAside'
import { Calendar, Badge } from 'antd'
import Modal from 'components/Modal'
import React, { useState } from 'react'
import PopUp from './pop-up'

export default function VitaCalendar() {
  const [showCalendarPop, setShowCalendarPop] = useState(false)
  const [dataList, setDataList] = useState([])

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  const onSelect = (value) => {
    // const data = getListData(value.date())
    console.log('data : ', value.date())
    console.log('data : ', value.format('YYYY-MM-DD'))
    const datalist = getListData(value)
    setDataList(datalist)
    console.log('data : ', datalist)
    setShowCalendarPop(true)
  }

  const getListData = (value) => {
    let listData
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ]
        break
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ]
        break
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ]
        break
      default:
    }
    return listData || []
  }

  const dateCellRender = (value) => {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <>
      <ContainerAside>
        <h1 className="page-title _sub">비타캘린더</h1>
        <section>
          <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} onSelect={onSelect} />
        </section>
      </ContainerAside>
      <Modal title={'팝업창'} onClose={() => setShowCalendarPop(false)} show={showCalendarPop}>
        <PopUp dataList={dataList} />
      </Modal>
    </>
  )
}
