import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Img from 'next/image'

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const ModalHeader = () => {
    return (
      <>
        {/*header*/}
        <header className="flex items-center justify-between px-10 pt-8 rounded-t">
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
      <section className="modal-wrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <article className="modal-size relative w-full my-6 mx-auto min-w-min">
          <div className="rounded-large shadow-lg overflow-hidden relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <ModalHeader title />
            {children}
          </div>
        </article>
      </section>
      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(ModalLayout, document.getElementById('modal-root'))
  } else {
    return null
  }
}
