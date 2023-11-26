import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

export function Button() {
  return (
    <Link to='/'>
      <button className='btn'></button>
    </Link>
  )
}