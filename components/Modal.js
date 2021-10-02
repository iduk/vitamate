import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Img from 'next/image'

export default function Modal({ show, onClose, children, title, size }) {
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
        <header className="flex items-start justify-between rounded-t">
          <h3 className="modal-title text-3xl font-bold mt-2">{title}</h3>
          <button
            className="flex-shrink-0 bg-transparent leading-none outline-none focus:outline-none"
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
      <section className="w-full h-full fixed inset-0 z-50 outline-none focus:outline-none">
        <article
          className={`grid grid-cols-1 place-content-center lg:place-content-center h-full w-full lg:max-w-xl mx-auto modal-size-${size} p-2 lg:p-0`}
        >
          <div className="p-5 pt-6 lg:p-8 lg:pt-6 rounded-large shadow-lg overflow-hidden relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <ModalHeader title />
            <div className="pt-6">{children}</div>
          </div>
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
