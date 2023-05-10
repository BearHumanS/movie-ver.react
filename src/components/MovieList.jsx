import React from 'react'
import './MovieList.css'

export default function MovieList({ info }) {
  return (
    <>
      <div className="movie-list">
        <div>{info}</div>
      </div>
    </>
  )
}
