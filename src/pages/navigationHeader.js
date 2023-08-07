import React from 'react'
import '../assets/styles/navigationHeader.scss'
import { Link } from 'react-router-dom'

export function NavigationHeader() {
  return (
    <div className='container'>
      <header className='header'>
        <nav>
            <ul>
                <li><Link to={'/userData'} >Home</Link></li>
                <li><Link to={'/loginInput'}>Logout</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
