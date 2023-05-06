import React, { useRef, useEffect } from 'react'
import './Rain.css'

function RainEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raindrops = []

    function createRaindrop() {
      const raindrop = {
        x: Math.random() * canvas.width,
        y: -5,
        speed: 2 + Math.random() * 3,
        length: 5 + Math.random() * 10
      }
      raindrops.push(raindrop)
    }

    function drawRaindrop(raindrop) {
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(174,194,224,0.5)'
      ctx.lineWidth = 1
      ctx.moveTo(raindrop.x, raindrop.y)
      ctx.lineTo(
        raindrop.x + raindrop.length * Math.sin(Math.PI / 6),
        raindrop.y + raindrop.length * Math.cos(Math.PI / 6)
      )
      ctx.stroke()
    }

    function moveRaindrop(raindrop) {
      raindrop.y += raindrop.speed
      raindrop.x += raindrop.speed / 3
      if (raindrop.y > canvas.height) {
        const index = raindrops.indexOf(raindrop)
        if (index !== -1) raindrops.splice(index, 1)
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      createRaindrop()
      for (const raindrop of raindrops) {
        drawRaindrop(raindrop)
        moveRaindrop(raindrop)
      }
      requestAnimationFrame(draw)
    }

    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      raindrops = []
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    draw()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} />
}

export default RainEffect
