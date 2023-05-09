import React from 'react'
import MovieList from './MovieList'
import Modal from './Modal'
import RainEffect from './Rain'
import './TheMain.css'

export default function TheMain() {
  return (
    <>
      <main>
        <RainEffect />
        <MovieList />
        <Modal />
      </main>
    </>
  )
}
