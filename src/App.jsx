import React, { useState } from 'react'
import './App.css'
import TheHeader from './components/TheHeader'
import TheMain from './components/TheMain'
import TheFooter from './components/TheFooter'
import { Reset } from 'styled-reset'

export default function App() {
  const [info, setInfo] = useState('영화 제목을 검색해주세요.')
  return (
    <>
      <Reset />
      <TheHeader setInfo={setInfo} />
      <TheMain info={info} />
      <TheFooter />
    </>
  )
}
