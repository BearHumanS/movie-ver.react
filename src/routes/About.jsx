import React from 'react'
import RainEffect from '../components/Rain'
import Nav from '../components/Nav'

export default function About() {
  return (
    <>
      <Nav />
      <RainEffect />
      <p
        style={{
          color: 'white',
          display: 'flex',
          top: 0,
          bottom: 0,
          position: 'absolute',
          textAlign: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          alignItems: 'center'
        }}>
        남기훈입니다.
      </p>
    </>
  )
}
