import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import Img from 'next/image'

export default function Modals({ show, onClose, children, size, title }) {
  const closeIcon = (
    <button>
      <Img src="/images/btn-popup-cancel.svg" width={44} height={44} alt="닫기" />
    </button>
  )

  const ModalHeader = () => {
    return (
      <>
        <header className="modal-header">
          <h3 className="modal-title text-2xl font-bold">{title}</h3>
        </header>
      </>
    )
  }

  return (
    <Modal
      open={show}
      onClose={onClose}
      classNames={{
        modal: `customModal modal-size-${size}`,
      }}
      closeIcon={closeIcon}
    >
      <ModalHeader />

      <section className="modal-content-wrap">
        <div className="modal-content">{children}</div>
      </section>
    </Modal>
  )
}
