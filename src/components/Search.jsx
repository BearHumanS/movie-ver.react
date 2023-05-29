import React from 'react'
import './Search.css'
import { AiOutlineClose } from 'react-icons/ai'

const Search = ({ searchInput, searchHandle, searchHandleInput, closeBox }) => {
  return (
    <>
      <div className="search-wrap">
        <div className="search">
          <div
            className="shadow"
            onClick={closeBox}></div>
          <div className="text">
            <input
              type="text"
              placeholder="영화를 검색하세요."
              onChange={searchHandleInput}
              value={searchInput}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  searchHandle()
                  closeBox()
                }
              }}
            />
            <div className="page-view">
              <select className="num-pages">
                <option value="1">10</option>
                <option value="2">20</option>
                <option value="3">30</option>
              </select>
            </div>
            <div className="year-view">
              <select className="years">
                <option>all</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <AiOutlineClose
              className="close"
              onClick={closeBox}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
