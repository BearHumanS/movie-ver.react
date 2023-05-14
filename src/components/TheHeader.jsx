import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './TheHeader.css'
import Search from './Search'

export default function TheHeader({
  searchInput,
  searchHandle,
  searchHandleInput
}) {
  const [listActive, setListActive] = useState(true)
  const [aboutActive, setAboutActive] = useState(false)
  const [toggleSearching, setToggleSearching] = useState(false)

  function openBox() {
    setToggleSearching(!toggleSearching)
  }
  function closeBox() {
    setToggleSearching(false)
  }

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
          searchHandle={searchHandle}
          searchInput={searchInput}
          searchHandleInput={searchHandleInput}
          closeBox={closeBox}
        />
      </header>
    </>
  )
}
