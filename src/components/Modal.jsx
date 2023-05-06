import React from 'react'
import './Modal.css'

export default function Modal() {
  const modal = document.querySelector('.modal')
  function openModal() {
    modal.classList.remove('hidden')
  }
  function closeModal() {
    modal.classList.add('hidden')
  }
  return (
    <>
      <button onClick={openModal}>테스트 버튼</button>
      <div className="modal hidden">
        <div className="modal-overlay"></div>
        <div className="modal_content">
          <div className="movie-detail">테스트 중</div>
          <button
            className="cancel"
            onClick={closeModal}>
            ❌
          </button>
        </div>
      </div>
    </>
  )
}
