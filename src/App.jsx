import { useState, useEffect, useRef } from 'react'
import TheHeader from './components/TheHeader'
import TheMain from './components/TheMain'
import TheFooter from './components/TheFooter'
import './App.css'
import { Reset } from 'styled-reset'

export default function App() {
  const [info, setInfo] = useState('영화 제목을 검색해주세요.')
  const inputRef = useRef(null)

  const movieListRef = useRef(null)
  const apiKey = '7035c60c'

  return (
    <>
      <Reset />
      <TheHeader
        setInfo={setInfo}
        movieListRef={movieListRef}
        inputRef={inputRef}
      />
      <TheMain info={info} />
      <TheFooter />
    </>
  )
}
