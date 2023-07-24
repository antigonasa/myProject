import React from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from './data'

const ServicesMenu = () => {
  return (
    <div className='nav-megamenu services-megamenu'>
        {servicesData.map((props) => {
            return(
                <Link 
                    key={props.id}
                    to={props.path} 
                    className='menu-link'
                >
                    <div className="icon">{props.icon}</div>
                    <div className='link-text'>
                        <p>{props.text}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default ServicesMenu