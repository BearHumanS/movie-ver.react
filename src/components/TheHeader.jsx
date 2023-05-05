import React from 'react'
import './TheHeader.css'
import { AiOutlineSearch } from 'react-icons/ai'

export default function TheHeader() {
  const boxOpen = () => {}
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
        <div className="search-box">
          <AiOutlineSearch />
        </div>
      </header>
    </>
  )
}
