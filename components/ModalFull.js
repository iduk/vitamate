import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Img from 'next/image'

export default function Modal({ show, onClose, children, title, modalSize }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
    if (show) {
      document.body.className = 'scroll-lock'
    } else {
      document.body.className = ''
    }
  }, [show])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const ModalHeader = () => {
    return (
      <>
        {/*header*/}
        <header className="flex items-center justify-between">
          <h3 className="text-3xl font-bold">{title}</h3>
          <button
            className="ml-auto bg-transparent border-0float-right text-3xl leading-none outline-none focus:outline-none"
            onClick={handleCloseClick}
          >
            <Img src="/images/btn-popup-cancel.svg" width="48" height="48" alt="닫기" />
          </button>
        </header>
      </>
    )
  }

  const ModalLayout = show ? (
    <>
      <section className="overflow-hidden fixed inset-0 z-50">
        <article className={'w-full h-full bg-white mx-auto'}>
          <ModalHeader title />
          <div className="p-4 lg:p-8">{children}</div>
        </article>
      </section>
      <div id="backdrop"></div>
    </>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(ModalLayout, document.getElementById('modal-root'))
  } else {
    return null
  }
}
