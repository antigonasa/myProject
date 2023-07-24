import React from 'react'
import { Link } from 'react-router-dom'
import './styles/banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='text'>
            <h1>Title</h1>
            <p>Lorem Ipsum dolor sit amet...</p>
            <Link to='/login' className='shared-button'>Join Us</Link>
        </div>
    </div>
  )
}

export default Banner