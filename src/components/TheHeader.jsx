import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Nav from './Nav'
import './TheHeader.css'
import Search from './Search'

export default function TheHeader({
  searchInput,
  searchHandle,
  searchHandleInput
}) {
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
        <Nav />
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
