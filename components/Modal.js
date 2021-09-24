import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Img from 'next/image'

export default function Modal({ show, onClose, children, title, modalSize }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
    window.setTimeout(function () {
      document.body.scrollTop = null
    }, 0)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const ModalHeader = () => {
    return (
      <>
        {/*header*/}
        <header className="flex items-center justify-between rounded-t">
          <h3 className="text-3xl font-bold leading-none">{title}</h3>
          <button
            className="ml-auto bg-transparent border-0 float-right text-3xl leading-none outline-none focus:outline-none"
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
      <section className="overflow-hidden fixed inset-0 top-4 lg:top-24 z-50 outline-none focus:outline-none p-4">
        <article className={'w-full lg:max-w-xl min-w-min mx-auto'}>
          <div className="px-6 py-6 lg:p-8 rounded-large shadow-lg overflow-hidden relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
