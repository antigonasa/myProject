import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav';
import { AiOutlineMenu } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import './navbar.scss'
import ProductsMenu from './ProductsMenu';
import ServicesMenu from './ServicesMenu';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    console.log('showSidebar', showSidebar)

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.pageYOffset;
            setIsScrolled(scrollHeight > 25 ? true : false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={isScrolled ? 'nav-scroll' : ''}>
            <Link to='/' className='nav-logo'></Link>

            <div className='nav-links'>
                <div className='nav-link'>
                    <Link to='/' className='inner-nav-link about-link'>
                        About Us
                    </Link>
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-nav-link products-link'>
                        Products <MdKeyboardArrowDown />
                    </Link>
                    <ProductsMenu />
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-nav-link services-link'>
                        Services <MdKeyboardArrowDown />
                    </Link>
                    <ServicesMenu />
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-nav-link contact-link'>
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className="nav-auth">
                <Link to='/login' className='shared-button'>Log in</Link>
                <Link to='/' className='shared-button'>Sign up</Link>
            </div>

            {showSidebar ? 
                <MobileNav 
                    closeSidebar={() => setShowSidebar(false)} 
                /> 
            : null}
            
            <button className='menu-button' 
                onClick={() => setShowSidebar(true)}>
                    <AiOutlineMenu />
            </button>
        </nav>
    )

}
export default Navbar