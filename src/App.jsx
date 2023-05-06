import './App.css'
import TheHeader from './components/TheHeader'
import RainEffect from './components/Rain'
import TheMain from './components/TheMain'
import TheFooter from './components/TheFooter'
import { Reset } from 'styled-reset'

export default function App() {
  return (
    <>
      <Reset />
      <TheHeader />
      <RainEffect />
      <TheMain />
      <TheFooter />
    </>
  )
}
