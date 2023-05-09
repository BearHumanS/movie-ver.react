import './App.css'
import TheHeader from './components/TheHeader'

import TheMain from './components/TheMain'
import TheFooter from './components/TheFooter'
import { Reset } from 'styled-reset'

export default function App() {
  return (
    <>
      <Reset />
      <TheHeader />
      <TheMain />
      <TheFooter />
    </>
  )
}
