import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [listActive, setListActive] = useState(false)
  const [aboutActive, setAboutActive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setListActive(location.pathname === '/')
    setAboutActive(location.pathname === '/about')
  }, [location])

  return (
    <>
      <ul className="menu">
        <li>
          <NavLink
            exact="true"
            to="/"
            className={`list ${listActive ? 'active' : ''}`}
            onClick={() => {
              setListActive(true)
              setAboutActive(false)
            }}>
            영화목록
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={`about ${aboutActive ? 'active' : ''}`}
            onClick={() => {
              setListActive(false)
              setAboutActive(true)
            }}>
            about me
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default Nav
