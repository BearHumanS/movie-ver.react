import React, { useState } from 'react'
import TheHeader from './components/TheHeader'
import TheMain from './components/TheMain'
import TheFooter from './components/TheFooter'
import './App.css'
import { Reset } from 'styled-reset'

const App = () => {
  const [info, setInfo] = useState('영화 제목을 검색해주세요.')
  const [searchInput, setSearchInput] = useState('')
  const [movieData, setMovieData] = useState([])

  const searchHandleInput = e => {
    setSearchInput(e.target.value)
  }

  async function fetchMovies(searchVal, page, year) {
    const numPages = parseInt(document.querySelector('.num-pages').value)
    if (![1, 2, 3].includes(numPages)) {
      return []
    }
    const apiKey = '7035c60c'
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchVal}&page=${page}&y=${year}`
    )
    const data = await response.json()
    return data.Search
  }

  const searchHandle = async () => {
    if (searchInput.trim() === '') {
      setInfo('검색어를 입력해주세요.')
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

      if (movies.length === 0) {
        alert('API 요청에 실패하였거나 페이지 범위를 지정해야 합니다.')
        return
      }

      setMovieData(movies)
    } catch (error) {
      alert('API 요청에 실패했습니다. ', error)
    }
  }

  return (
    <>
      <Reset />
      <TheHeader
        searchHandle={searchHandle}
        searchInput={searchInput}
        searchHandleInput={searchHandleInput}
      />

      <TheMain
        info={info}
        movieData={movieData}
      />
      <TheFooter />
    </>
  )
}
export default App
