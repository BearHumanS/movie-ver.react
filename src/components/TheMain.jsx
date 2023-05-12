import React from 'react'
import MovieList from './MovieList'
import Modal from './Modal'
import RainEffect from './Rain'
import './TheMain.css'

export default function TheMain({ info, movieListRef }) {
  return (
    <>
      <main>
        <RainEffect />
        <MovieList
          info={info}
          movieListRef={movieListRef}
        />
        <Modal />
      </main>
    </>
  )
}
