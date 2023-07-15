import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='column'>
      <Link to={'/'}><h2 className='Header ribbon'>Home</h2></Link>
      <Link to={'/About'}><h2 className='Header ribbon'>About</h2></Link>
      <Link to={'/Contact'}><h2 className='Header ribbon'>Contact</h2></Link>
      </div>
  )
}

export default Header