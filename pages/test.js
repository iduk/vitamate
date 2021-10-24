import React from 'react'
import { Modal } from 'react-responsive-modal'
import Img from 'next/image'
import SurveyForm from './survey/survey-form'

export default function Test() {
  const [openFirst, setOpenFirst] = React.useState(false)
  const [openSecond, setOpenSecond] = React.useState(false)

  const closeIcon = (
    <button>
      <Img src="/images/btn-popup-cancel.svg" width={44} height={44} alt="닫기" />
    </button>
  )

  return (
    <>
      <button className="button" onClick={() => setOpenFirst(true)}>
        Open first modal
      </button>

      <Modal
        open={openFirst}
        onClose={() => setOpenFirst(false)}
        classNames={{
          modal: 'customModal',
        }}
        closeIcon={closeIcon}
      >
        <header className="pr-12">
          <h3 className="modal-title text-2xl font-bold mt-2">{title}</h3>
        </header>

        <div className="modal-content"></div>
      </Modal>
    </>
  )
}
