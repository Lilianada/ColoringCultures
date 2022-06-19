import React from 'react';
import "./Header.css";
import Logo from '../../assets/Logo.svg'

export default function Header () {
    return (
        <header className='navHeader'>
            <div className='desktopDisplay'>
                <div className='logo'>
                    <img src={Logo} alt='Logo' />
                </div>
                <nav className='navbar'>
                    <ul className='navList'>
                        <li className='navItem'><a className='navLink'>About</a></li>
                        <li className='navItem'><a className='navLink'>Terms Of Use</a></li>
                        <li className='navItem'><a className='navLink'>Privacy Policy</a></li>
                        <li className='navItem'><a className='navButton'>Contact Us</a></li>
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