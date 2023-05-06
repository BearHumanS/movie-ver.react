import React from 'react'
import './TheHeader.css'
import { AiOutlineSearch } from 'react-icons/ai'

export default function TheHeader() {
  function openBox() {
    const header = document.querySelector('header')
    header.classList.add('searching')
  }
  return (
    <>
      <header>
        <ul className="menu">
          <li>
            <a href="#">영화목록</a>
          </li>
          <li>
            <a href="#">about me</a>
          </li>
        </ul>
        <div
          className="search-box"
          onClick={openBox}>
          <AiOutlineSearch />
        </div>
      </header>
    </>
  )
}
