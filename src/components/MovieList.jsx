// MovieList.jsx
import React, { useState } from 'react'
import './MovieList.css'
import Modal from './Modal'

export default function MovieList({ movieData, apiKey }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedImdbID, setSelectedImdbID] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const openModal = imdbID => {
    const movie = movieData.find(movie => movie.imdbID === imdbID)
    setSelectedImdbID(imdbID)
    setSelectedMovie(movie)
    setModalVisible(true)
  }

  const closeModal = () => {
    setSelectedImdbID(null)
    setSelectedMovie(null)
    setModalVisible(false)
  }

  return (
    <>
      <div className="movie-list">
        <div className="movie-items">
          {movieData.map(({ Title, Year, imdbID, Poster }) => (
            <div key={imdbID}>
              <div className="title">
                {Title} ({Year})
              </div>

              <div className="movie-poster">
                <img
                  className="poster"
                  src={Poster}
                  alt={Title}
                  onError={e => {
                    e.target.onerror = null
                    e.target.src = 'src/assets/No-image-available.jpg'
                  }}
                  onClick={() => openModal(imdbID)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalVisible && (
        <Modal
          movie={selectedMovie}
          closeModal={closeModal}
          apiKey={apiKey}
        />
      )}
    </>
  )
}
