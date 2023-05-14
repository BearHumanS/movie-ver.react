import React from 'react'
import './MovieList.css'

export default function MovieList({ info, movieData }) {
  return (
    <>
      <div className="movie-list">
        <div>{info}</div>
        {movieData.map(({ Title, Year, imdbID, Poster }) => (
          <div key={imdbID}>
            <h2>
              {Title} ({Year})
            </h2>
            <p>
              <img
                className="poster"
                src={Poster}
                alt={Title}
                onError={e => {
                  e.target.onerror = null
                  e.target.src = '/No-image-available.jpg'
                }}
                onClick={() => getDetails(imdbID)}
              />
            </p>
            <div
              className="movie-data"
              style={{ display: 'none' }}></div>
          </div>
        ))}
      </div>
    </>
  )
}
