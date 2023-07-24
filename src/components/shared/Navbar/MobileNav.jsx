import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './mobileNav.scss'
import { CgClose } from 'react-icons/cg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { productsData, servicesData } from './data'

const MobileNav = (props) => {

    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    return (
        <div className='mobile-nav'>

            <div className="sidebar">
                <div className="logo-container">
                    <Link to='/' className='sidebar-logo'></Link>
                    <button onClick={props.closeSidebar}><CgClose /></button>
                </div>

                <div className="sidebar-link">
                    <div className="inner-sidebar-link">
                        <Link to='/' className='link'>About Us</Link>
                    </div>
                </div>

                <div className="sidebar-link">
                    <div className="inner-sidebar-link">
                        <Link to='/' className='link'>Products</Link>
                        <button 
                            className={dropdown ? 'rotate' : ''}
                            onClick={() => setDropdown(!dropdown)}
                        >
                            <MdKeyboardArrowDown />
                        </button>
                    </div>

                    {dropdown ? <div className='dropdown-links'>
                        {productsData.map((props) => {
                            return(
                                <Link to={props.path}>
                                    {props.text}
                                </Link>
                            )
                        })}
                    </div> : null}

                </div>

                <div className="sidebar-link">
                    <div className="inner-sidebar-link">
                        <Link to='/' className='link'>Services</Link>
                        <button 
                            className={dropdown2 ? 'rotate' : ''}
                            onClick={() => setDropdown2(!dropdown2)}
                        >
                            <MdKeyboardArrowDown />
                        </button>
                    </div>

                    {dropdown2 ? <div className='dropdown-links'>
                        {servicesData.map((props) => {
                            return(
                                <Link to={props.path}>
                                    {props.text}
                                </Link>
                            )
                        })}
                    </div> : null}
                </div>

                <div className="sidebar-link">
                    <div className="inner-sidebar-link">
                        <Link to='/' className='link'>Contact Us</Link>
                    </div>
                </div>

                <div className="sidebar-auth">
                    <Link to='/login' className='shared-button'>Log in</Link>
                    <Link to='/' className='shared-button'>Sign up</Link>
                </div>
            </div>

            <div className="backdrop" onClick={props.closeSidebar}></div>

        </div>
    )
}

export default MobileNav