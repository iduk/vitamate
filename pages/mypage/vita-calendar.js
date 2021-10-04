import ContainerAside from 'components/Layouts/ContainerAside'
import { ConfigProvider, Calendar, Badge } from 'antd'
import koKR from 'antd/lib/locale/ko_KR'
import Modal from 'components/Modal'
import React, { useState } from 'react'
import PopUp from './pop-up'
import moment from 'moment'
import Img from 'next/image'
import Link from 'next/link'

moment.updateLocale('koKR', {
  weekdaysMin: ['일', '월', '화', '수', '목', '금', '토'],
})

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
    setShowCalendarPop(false)
  }

  const getListData = (value) => {
    let listData
    switch (value.date()) {
      case 11:
        listData = [{ type: 'blue', content: '구독시작' }]
        break
      case 12:
        listData = [{ type: 'red', content: '구독종료' }]
        break
      case 16:
        listData = [{ type: 'warning', content: '' }]
        break
      case 17:
        listData = [{ type: 'warning', content: '' }]
        break
      default:
    }
    return listData || []
  }

  const Legend = [
    { id: 0, title: '오늘', color: 'primary' },
    { id: 1, title: '결제일', color: 'gray' },
    { id: 2, title: '섭취', color: 'green' },
    { id: 3, title: '미섭취', color: 'yellow' },
    { id: 4, title: '구독시작', color: 'blue' },
    { id: 5, title: '구독종료', color: 'red' },
  ]

  const dateCellRender = (value) => {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.type} className="calendar-types text-center mt-3">
            {/* <Badge status={item.type} text={item.content} /> */}
            <div className={`calendar-types-label bg-${item.type}-100 text-${item.type}-700`}>
              <span className="dot">●</span>
              <span>{item.content}</span>
            </div>
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
          <header className="lg:flex lg:justify-between lg:items-center block">
            <div className="w-full lg:max-w-xs flex justify-between items-center">
              <button className="p-3">
                <Img src="/images/ic-arrow-back.svg" width={32} height={32} alt="left" />
              </button>
              <p className="text-xl leading-snug">2021. 10</p>
              <button className="p-3">
                <Img src="/images/ic-arrow-next.svg" width={32} height={32} alt="right" />
              </button>
            </div>

            <ul className="w-full lg:max-w-sm flex justify-between items-baseline">
              {Legend.map((item) => (
                <>
                  <li key={item.id} className="calendar-types">
                    <div className={`calendar-types-label text-${item.color}-600`}>
                      <span className="dot">●</span>
                      <span>{item.title}</span>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </header>

          <ConfigProvider locale={koKR}>
            <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} onSelect={onSelect} />
          </ConfigProvider>
        </section>
      </ContainerAside>
      <Modal
        title={'팝업창'}
        onClose={() => setShowCalendarPop(false)}
        show={showCalendarPop}
        onPanelChange={onPanelChange}
      >
        <PopUp dataList={dataList} />
      </Modal>
    </>
  )
}
