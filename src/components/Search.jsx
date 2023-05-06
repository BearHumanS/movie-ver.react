import React from 'react'
import './Search.css'
import { AiOutlineClose } from 'react-icons/ai'

export default function Search() {
  function remove() {
    const header = document.querySelector('header')
    header.classList.remove('searching')
  }

  const search = async e => {
    const searchInput = document.querySelector('.search-input')
    if (e.key === 'Enter') {
      remove()
      const searchVal = searchInput.value
      if (searchVal.trim() === '') {
        alert('검색어를 입력해주세요.')
        return
      }
    }
  }

  return (
    <>
      <div className="search-wrap">
        <div className="search">
          <div
            className="shadow"
            onClick={remove}></div>
          <div className="text">
            <input
              className="search-input"
              type="text"
              placeholder="영화를 검색하세요."
              onKeyDown={search}
            />
            <div className="page-view">
              <select id="num-pages">
                <option value="1">10</option>
                <option value="2">20</option>
                <option value="3">30</option>
              </select>
            </div>
            <div className="year-view">
              <select id="years">
                <option>all</option>
              </select>
            </div>
            <AiOutlineClose
              className="close"
              onClick={remove}
            />
          </div>
        </div>
      </div>
    </>
  )
}
