import './App.css'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import { Reset } from 'styled-reset'
import RainEffect from './components/Rain'

export default function App() {
  return (
    <>
      <Reset />
      <TheHeader />
      <RainEffect />
      <TheFooter />
    </>
  )
}
