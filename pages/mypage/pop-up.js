import { Badge } from 'antd'
import React from 'react'

export default function PopUp(data) {
  console.log('popup : ', data.dataList)

  const dataList = data.dataList

  return (
    <>
      <ul className="events">
        {dataList.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    </>
  )
}
