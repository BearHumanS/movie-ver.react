import React from 'react'
import './Modal.css'

export default function Modal() {
  function openModal() {
    const modal = document.querySelector('.modal')
    modal.classList.remove('hidden')
  }
  function closeModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('hidden')
  }
  return (
    <>
      <button onClick={openModal}>테스트 버튼</button>
      <div className="modal hidden">
        <div
          className="modal_overlay"
          onClick={closeModal}></div>
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
