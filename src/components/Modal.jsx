// Modal.jsx
import React, { useState, useEffect } from 'react'
import './Modal.css'

const Modal = ({ movie, closeModal, apiKey }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}&plot=full`
      try {
        const response = await fetch(url)
        const data = await response.json()
        setMovieDetails(data)
      } catch (error) {
        alert('API 요청에 실패했습니다.', error)
        setMovieDetails({ Error: 'API 요청에 실패했습니다.' })
      }
    }

    fetchMovieDetails()
  }, [movie.imdbID, apiKey])

  return (
    <>
      <div className={`modal ${isOpen ? '' : 'hidden'}`}>
        <div
          className="modal_overlay"
          onClick={closeModal}></div>
        <div className="modal_content">
          <div className="modal-img">
            <img src={movie.Poster} />
          </div>
          <div className="movie-detail">
            <h2>&lt;{movie.Title}&gt;</h2>
            <p>{movie.Year}</p>
            {movieDetails ? (
              <>
                <p>
                  <strong>Director:</strong> {movieDetails.Director}
                </p>
                <p>
                  <strong>Actors:</strong> {movieDetails.Actors}
                </p>
                <p>
                  <strong>Runtime:</strong> {movieDetails.Runtime}
                </p>
                <p>
                  <strong>Genre:</strong> {movieDetails.Genre}
                </p>
                <p>
                  <strong>Plot:</strong> {movieDetails.Plot}
                </p>
              </>
            ) : (
              <p className="loading">Loading movie details...</p>
            )}
          </div>
          <button
            className="cancel"
            onClick={closeModal}>
            ✖️
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
