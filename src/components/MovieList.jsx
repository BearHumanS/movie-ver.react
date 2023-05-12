import React from 'react'
import './MovieList.css'

export default function MovieList({ info, movieListRef }) {
  return (
    <>
      <div movieListRef={movieListRef}>
        <div>{info}</div>
      </div>
    </>
  )
}
