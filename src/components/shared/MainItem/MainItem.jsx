import React from 'react'
import { Link } from 'react-router-dom'
import './mainItem.scss'

const MainItem = (props) => {
    return (
        <div className={props.imageFirst ? 'shared-main-item image-first' : 'shared-main-item'}>
            <div className="text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                {props.path ? 
                    <Link className='shared-button' 
                        to={props.path}
                    >
                        {props.linkText}
                    </Link> 
                : null}
            </div>
            <div className='img'>
                <div className='inner-img' style={{content: `url(${props.img})`}}></div>
            </div>
        </div>
    )
}

export default MainItem