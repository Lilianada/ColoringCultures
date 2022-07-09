import React, { useState } from 'react';
import "./Header.css";
import Logo from '../../assets/Logo.svg';
import { Link } from "react-router-dom";

export default function Header () {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle); //to toggle the bars

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
                        <li className='navItem'><a href='mailto:info@colorincultures.app' className='navButton'>Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className='mobileDisplay'>
                <Link className='logo' to='/'>
                    <img src={Logo} alt='Logo' />
                </Link>
                <div className='mobileMenu'>
                    <div className={toggle ? "change" : "navToggle"} //to toggle the bars
                        onClick={handleToggle}
                    >
                        <div className='bar bOne'></div>
                        <div className='bar bTwo'></div>
                        <div className='bar bThree'></div>
                    </div>
                    
                    {toggle && <nav className={toggle ? 'navbar' : "active"}>
                    
                            <ul className='navList'>
                                <li className='navItem'><Link to="/about" className='navLink'>About</Link></li>
                                <li className='navItem'><Link to="/terms-of-use" className='navLink'>Terms Of Use</Link></li>
                                <li className='navItem'><Link to="/privacy-policy" className='navLink'>Privacy Policy</Link></li>
                                <li className='navItem'><a href='mailto:info@colorincultures.app' className='navButton'>Contact Us</a></li>
                            </ul>
                        </nav>
                    }
                </div>
            </div>
        </header>
    )
}