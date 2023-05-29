import React, { useState } from 'react'
import TheHeader from '../components/TheHeader'
import TheMain from '../components/TheMain'

function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [movieData, setMovieData] = useState([])

  const apiKey = '7035c60c'

  const searchHandleInput = e => {
    setSearchInput(e.target.value)
  }

  async function fetchMovies(searchVal, page, year) {
    const numPages = parseInt(document.querySelector('.num-pages').value)
    if (![1, 2, 3].includes(numPages)) {
      return []
    }
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchVal}&page=${page}&y=${year}`
    )
    const data = await response.json()
    return data.Search
  }

  const searchHandle = async () => {
    if (searchInput.trim() === '') {
      alert('검색어를 입력해주세요.')
      return
    }
    try {
      const year = document.querySelector('.years').value
      const numPages = parseInt(document.querySelector('.num-pages').value)
      const movies = []
      for (let i = 1; i <= numPages; i++) {
        const data = await fetchMovies(searchInput, i, year)
        movies.push(...data)
      }

      setMovieData(movies)
    } catch (error) {
      alert('API 요청에 실패했습니다.', error)
    }
  }

  return (
    <>
      <TheHeader
        searchHandle={searchHandle}
        searchInput={searchInput}
        searchHandleInput={searchHandleInput}
      />

      <TheMain
        movieData={movieData}
        apiKey={apiKey}
      />
    </>
  )
}

export default Home
