import React from 'react'
import MovieList from './MovieList'

import RainEffect from './Rain'
import './TheMain.css'

export default function TheMain({ movieData, apiKey }) {
  return (
    <>
      <main>
        <RainEffect />
        <MovieList
          movieData={movieData}
          apiKey={apiKey}
        />
      </main>
    </>
  )
}
