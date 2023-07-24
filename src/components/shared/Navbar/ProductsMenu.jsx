import React from 'react'
import { Link } from 'react-router-dom'
import { productsData } from './data'

const ProductsMenu = () => {
  return (
    <div className='nav-megamenu products-megamenu'>
        {productsData.map((props) => {
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

export default ProductsMenu