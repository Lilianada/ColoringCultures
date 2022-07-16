import React from 'react';
import './Footer.css'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footerWrapper'>
        <div className='socialWrap'>
            <a href='https://facebook.com' className='wrap'> <BsFacebook size={18} /> </a>
            <a href='https://twitter.com' className='wrap'> <BsTwitter size={18} /> </a>
            <a href='https://instagram.com/culturecolors' className='wrap'> <BsInstagram size={18} /> </a>
        </div>
    </footer>
  )
}

export default Footer