import React, { useState, useRef } from 'react'
import Search from './Search'
import { AiOutlineSearch } from 'react-icons/ai'
import './TheHeader.css'

export default function TheHeader({ setInfo, inputRef }) {
  const [listActive, setListActive] = useState(true)
  const [aboutActive, setAboutActive] = useState(false)
  const [toggleSearching, setToggleSearching] = useState(false)

  function openBox() {
    setToggleSearching(!toggleSearching)
    setTimeout(() => {
      inputRef.current.focus()
    }, 600)
  }
  /* function openBox() {
    const header = document.querySelector('header')
    header.classList.add('searching')
  } */
  return (
    <>
      <header className={`${toggleSearching ? 'searching' : ''}`}>
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
        <Search
          setToggleSearching={setToggleSearching}
          inputRef={inputRef}
          setInfo={setInfo}
        />
      </header>
    </>
  )
}
