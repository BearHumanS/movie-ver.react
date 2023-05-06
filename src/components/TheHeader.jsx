import React, { useState } from 'react'
import './TheHeader.css'
import { AiOutlineSearch } from 'react-icons/ai'
import Search from './Search'

export default function TheHeader() {
  const [listActive, setListActive] = useState(true)
  const [aboutActive, setAboutActive] = useState(false)

  function openBox() {
    const header = document.querySelector('header')
    header.classList.add('searching')
  }
  return (
    <>
      <header>
        <ul className="menu">
          <li>
            <a
              href="#"
              className={`list ${listActive ? 'active' : ''}`}
              onClick={() => {
                setListActive(true)
                setAboutActive(false)
              }}>
              영화목록
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`about ${aboutActive ? 'active' : ''}`}
              onClick={() => {
                setAboutActive(true)
                setListActive(false)
              }}>
              about me
            </a>
          </li>
        </ul>
        <div
          className="search-box"
          onClick={openBox}>
          <AiOutlineSearch />
        </div>
        <Search />
      </header>
    </>
  )
}
