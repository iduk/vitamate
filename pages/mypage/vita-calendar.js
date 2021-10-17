import ContainerAside from 'components/Layouts/ContainerAside'
import { ConfigProvider, Calendar, Badge } from 'antd'
import koKR from 'antd/lib/locale/ko_KR'
import Modal from 'components/Modal'
import React, { useState } from 'react'
import moment from 'moment'
import Img from 'next/image'
import Link from 'next/link'

moment.updateLocale('koKR', {
  weekdaysMin: ['일', '월', '화', '수', '목', '금', '토'],
})

export default function VitaCalendar() {
  const [showCalendarPop, setShowCalendarPop] = useState(false)
  const [dataList, setDataList] = useState(null)
  const [currentMonth, setCurrentMonth] = useState([])

  const headerRender = ({ value, type, onChange, onTypeChange }) => {
    const month = value.month()
    const year = value.year()
    setCurrentMonth(month)
    const onChangeButton = (type) => {
      console.log('type : ', month - 1)

      if (type === 'left') {
        const newValue = value.clone()
        newValue.month(parseInt(month - 1, 10))
        onChange(newValue)
      } else {
        const newValue = value.clone()
        newValue.month(parseInt(month + 1, 10))
        onChange(newValue)
      }
      setShowCalendarPop(false)
    }
    return (
      <header className="lg:flex lg:justify-between lg:items-center block ">
        <div className="w-full lg:max-w-xs flex justify-between items-center relative">
          <button className="p-3" onClick={() => onChangeButton('left')}>
            <Img src="/images/ic-arrow-back.svg" width={32} height={32} alt="left" />
          </button>
          <p className="text-xl leading-snug">
            {year}. {month + 1}
          </p>
          <button className="p-3" onClick={() => onChangeButton('right')}>
            <Img src="/images/ic-arrow-next.svg" width={32} height={32} alt="right" />
          </button>
        </div>

        <ul className="grid grid-cols-4 gap-1 mx-6 lg:mx-0 lg:flex lg:justify-end lg:items-baseline">
          {Legend.map((item) => (
            <>
              <li key={item.id} className="calendar-types lg:ml-4">
                <div className={`text-${item.color}-600`}>
                  <span className="dot mr-1">●</span>
                  <span className="text-xs">{item.title}</span>
                </div>
              </li>
            </>
          ))}
        </ul>
      </header>
    )
  }

  const onSelect = (value) => {
    // const data = getListData(value.date())
    // console.log('data : ', value.format('YYYY-MM-DD'))
    const datalist = getListData(value)
    setDataList(...datalist)
    setShowCalendarPop(true)
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
        listData = []
    }
    return listData || []
  }

  const Legend = [
    { id: 0, title: '오늘', color: 'primary' },
    { id: 1, title: '결제일', color: 'gray' },
    { id: 2, title: '섭취', color: 'green' },
    { id: 3, title: '미섭취', color: 'yellow' },
    { id: 4, title: '구독시작', color: 'blue' },
    { id: 4, title: '구독종료', color: 'red' },
  ]

  const dateCellRender = (value) => {
    const listData = getListData(value)
    return (
      value.month() === currentMonth && (
        <ul className="events" key={value.date()}>
          <li className="calendar-types text-center mt-3">
            {/* 
              상태별 날짜 표기 클래스명
              오늘:  calendar-types--today
              섭취:  calendar-types--action
              미섭취: calendar-types--action-not
            */}
            <div className="">{value.date()}</div>

            {listData.map((item) => (
              <>
                <div
                  key={item.type}
                  className={`hidden lg:inline-flex calendar-types-label bg-${item.type}-100 text-${item.type}-700`}
                >
                  <span className="dot">●</span>
                  <span>{item.content}</span>
                </div>

                <div key={item.type} className={`lg:hidden calendar-types-label mobile text-${item.type}-700`}>
                  <span className="dot">●</span>
                </div>
              </>
            ))}
          </li>
        </ul>
      )
    )
  }
  return (
    <>
      <ContainerAside>
        <h1 className="page-title _sub">비타캘린더</h1>
        <section>
          <ConfigProvider locale={koKR}>
            <Calendar dateCellRender={dateCellRender} onSelect={onSelect} headerRender={headerRender} />
          </ConfigProvider>
        </section>
      </ContainerAside>
      <Modal onClose={() => setShowCalendarPop(false)} show={showCalendarPop} size="sm">
        {/* <div>{dataList?.type}</div> */}
        {/* <div>{dataList?.content}</div> */}
        <form>
          <div className="text-center">
            <span className="mx-auto w-16 h-16 rounded-full bg-gray-100 grid place-items-center">
              <Img src="/images/ic-vitamin.svg" width={32} height={32} alt="vitamin icon" />
            </span>
            <p className="text-xl py-4">영양제를 모두 먹었나요?</p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <h6 className="mb-3">결제 정보</h6>
            <div className="flex items-center text-sm">
              <span className=" text-gray-400 w-20 flex-shrink-0">카드번호</span>
              <p className="leading-none text-gray-600">●●●●-●●●●-●●●●-1234</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <button type="submit" className="rounded-md p-4 w-full border border-primary-600 bg-primary-600 text-white">
              섭취
            </button>
            <button type="cancel" className="rounded-md p-4 w-full border border-primary-600  text-primary-600">
              미섭취
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
