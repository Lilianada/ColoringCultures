import React from 'react';
import "./Header.css";
import Logo from '../../assets/Logo.svg';
import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header className='navHeader'>
            <div className='desktopDisplay'>
                <Link className='logo' to='/'>
                    <img src={Logo} alt='Logo' />
                </Link>
                <nav className='navbar'>
                    <ul className='navList'>
                        <li className='navItem'><Link to="/about" className='navLink'>About</Link></li>
                        <li className='navItem'><Link to="/terms-of-use" className='navLink'>Terms Of Use</Link></li>
                        <li className='navItem'><Link to="/privacy-policy" className='navLink'>Privacy Policy</Link></li>
                        <li className='navItem'><a href='/' className='navButton'>Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className='mobileDisplay'>
                <div className='logo'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='mobileMenu'>
                    <div className='navToggle'>
                        <div className='bar bOne'></div>
                        <div className='bar bTwo'></div>
                        <div className='bar bThree'></div>
                    </div>
                    
                    {/* <nav className='navbar'>
                        <ul className='navList'>
                            <li className='navItem'><a className='navLink'>About</a></li>
                            <li className='navItem'><a className='navLink'>Terms Of Use</a></li>
                            <li className='navItem'><a className='navLink'>Privacy Policy</a></li>
                            <li className='navItem'><a className='navButton'>Contact Us</a></li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </header>
    )
}