import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation