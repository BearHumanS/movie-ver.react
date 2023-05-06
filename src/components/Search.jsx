import React from 'react'
import './Search.css'
import { AiOutlineClose } from 'react-icons/ai'

export default function Search() {
  const close = () => {
    const header = document.querySelector('header')
    header.classList.remove('searching')
  }
  const shadow = () => {
    const header = document.querySelector('header')
    header.classList.remove('searching')
  }
  return (
    <>
      <div className="search-wrap">
        <div className="search">
          <div
            className="shadow"
            onClick={shadow}></div>
          <div className="text">
            <input
              className="search-input"
              type="text"
              placeholder="영화를 검색하세요."
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
              onClick={close}
            />
          </div>
        </div>
      </div>
    </>
  )
}
