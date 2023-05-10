import React, { useState } from 'react'
import './Modal.css'

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)
  /*   function openModal() {
    const modal = document.querySelector('.modal')
    modal.classList.remove('hidden')
  }
  function closeModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('hidden')
  } */
  return (
    <>
      <button onClick={() => setIsOpen(true)}>테스트 버튼</button>
      <div className={`modal ${isOpen ? '' : 'hidden'}`}>
        <div
          className="modal_overlay"
          onClick={() => setIsOpen(false)}></div>
        <div className="modal_content">
          <div className="movie-detail">테스트 중</div>
          <button
            className="cancel"
            onClick={() => setIsOpen(false)}>
            ❌
          </button>
        </div>
      </div>
    </>
  )
}
