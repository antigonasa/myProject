import React from 'react'
import './styles/images.scss'

const Images = () => {
  return (
    <div className='images-component'>

        <div className="images">
            <div className='top'>
                <div className="img1"></div>
                <div className="rec"></div>
            </div>

            <div className="bottom">
                <div className="left">
                    <div className="hexagon"></div>
                    <div className="img2"></div>
                    <div className="circle"></div>
                </div>
                <div className="img3"></div>
            </div>
        </div>

        <div className="text">
            <h1>
                Every course comes with a shareable certificate.
            </h1>
            <p>
            Outkos Academy is a trustful partner of KosovaEducation. We practice transparent teaching and learning methods to help students understand why and how they are learning courses content in particular ways. We also have education partnerships with many training and educational institutions.
            Outkos Academy is a trustful partner of KosovaEducation. We practice transparent teaching and learning methods to help students understand why and how they are learning courses content in particular ways. We also have education partnerships with many training and educational institutions.
            </p>
        </div>
    </div>
  )
}

export default Images