import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const modalContainer = document.querySelector('#modal-container')

const Modal = () => {

  const modalNode = document.createElement('div')

  useEffect( () => {
    modalContainer.appendChild(modalNode)

    return () => {
      modalContainer.removeChild(modalNode)
    }
  })

  return ReactDOM.createPortal(<div>Hello World</div>, modalNode)
}

export default Modal