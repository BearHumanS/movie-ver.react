import React from 'react'
import './TheHeader.css'
import { AiOutlineSearch } from 'react-icons/ai'

export default function TheHeader() {
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="#">영화목록</a>
          </li>
          <li>
            <a href="#">about me</a>
          </li>
          <li>
            <AiOutlineSearch />
          </li>
        </ul>
      </header>
    </>
  )
}
